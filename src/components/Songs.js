import React, { useEffect, useState } from "react";
import Card from "./Card.js";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Songs.css";

const Songs = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  const [topCollapsed, setTopCollapsed] = useState(true); // carousel initially
  const [newCollapsed, setNewCollapsed] = useState(true); // carousel initially

  const [topLoading, setTopLoading] = useState(true);
  const [newLoading, setNewLoading] = useState(true);
  const [songsLoading, setSongsLoading] = useState(true);

  const [topError, setTopError] = useState(null);
  const [newError, setNewError] = useState(null);
  const [songsError, setSongsError] = useState(null);

  const swiperBreakpoints = {
    0: { slidesPerView: 1 },
    600: { slidesPerView: 2 },
    900: { slidesPerView: 3 },
    1200: { slidesPerView: 6 },
  };

  const handleTopCollapse = () => setTopCollapsed((prev) => !prev);
  const handleNewCollapse = () => setNewCollapsed((prev) => !prev);

  // Fetch Top Albums
  useEffect(() => {
    const fetchTopAlbums = async () => {
      setTopLoading(true);
      try {
        const res = await axios.get("https://qtify-backend.labs.crio.do/albums/top");
        setTopAlbums(res.data);
      } catch (err) {
        setTopError("Failed to load top albums.");
      } finally {
        setTopLoading(false);
      }
    };
    fetchTopAlbums();
  }, []);

  // Fetch New Albums
  useEffect(() => {
    const fetchNewAlbums = async () => {
      setNewLoading(true);
      try {
        const res = await axios.get("https://qtify-backend.labs.crio.do/albums/new");
        setNewAlbums(res.data);
      } catch (err) {
        setNewError("Failed to load new albums.");
      } finally {
        setNewLoading(false);
      }
    };
    fetchNewAlbums();
  }, []);

  // Fetch Songs
  useEffect(() => {
    const fetchSongs = async () => {
      setSongsLoading(true);
      try {
        const res = await axios.get("https://qtify-backend.labs.crio.do/songs");
        setSongs(res.data);
      } catch (err) {
        setSongsError("Failed to load songs.");
      } finally {
        setSongsLoading(false);
      }
    };
    fetchSongs();
  }, []);

  // Render albums helper
  const renderAlbums = (albums, title, collapsed, handleCollapse) => {
    if (!albums) return null;

    return (
      <Box mb={4}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">{title}</Typography>
          <Button onClick={handleCollapse}>
            {collapsed ? "Collapse" : "Show All"} {/* Corrected logic */}
          </Button>
        </Box>

        {collapsed ? (
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            breakpoints={swiperBreakpoints}
          >
            {albums.map((album) => (
              <SwiperSlide key={album.id}>
                <Card
                  id={album.id}
                  name={album.title}
                  image={album.image}
                  follows={album.follows}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Grid container spacing={2}>
            {albums.map((album) => (
              <Grid item key={album.id} xs={12} sm={6} md={4} lg={2}>
                <Card
                  id={album.id}
                  name={album.title}
                  image={album.image}
                  follows={album.follows}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    );
  };

  return (
    <Box px={2}>
      {/* Top Albums */}
      {topLoading ? (
        <Box textAlign="center" mt={2}><CircularProgress /></Box>
      ) : topError ? (
        <Typography color="error">{topError}</Typography>
      ) : (
        renderAlbums(topAlbums, "Top Albums", topCollapsed, handleTopCollapse)
      )}

      {/* New Albums */}
      {newLoading ? (
        <Box textAlign="center" mt={2}><CircularProgress /></Box>
      ) : newError ? (
        <Typography color="error">{newError}</Typography>
      ) : (
        renderAlbums(newAlbums, "New Albums", newCollapsed, handleNewCollapse)
      )}

      {/* Songs Section */}
      <Box className="songs-section" mb={4}>
        <Typography variant="h6" mb={2}>Songs</Typography>
        {songsLoading ? (
          <Box textAlign="center" mt={2}><CircularProgress /></Box>
        ) : songsError ? (
          <Typography color="error">{songsError}</Typography>
        ) : songs.length === 0 ? (
          <Typography>No songs available.</Typography>
        ) : (
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            breakpoints={swiperBreakpoints}
          >
            {songs.map((song) => (
              <SwiperSlide key={song.id}>
                <Card
                  id={song.id}
                  name={song.title}
                  image={song.image}
                  follows={song.likes}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Box>
    </Box>
  );
};

export default Songs;
// recent commit