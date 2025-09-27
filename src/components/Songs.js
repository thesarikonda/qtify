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

  const [topCollapsed, setTopCollapsed] = useState(
    localStorage.getItem("topAlbumsCollapse") === "true"
  );
  const [newCollapsed, setNewCollapsed] = useState(
    localStorage.getItem("newAlbumsCollapse") === "true"
  );

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

  const handleTopCollapse = () => {
    setTopCollapsed((prev) => {
      localStorage.setItem("topAlbumsCollapse", !prev);
      return !prev;
    });
  };

  const handleNewCollapse = () => {
    setNewCollapsed((prev) => {
      localStorage.setItem("newAlbumsCollapse", !prev);
      return !prev;
    });
  };

  // Fetch Top Albums
  useEffect(() => {
    const fetchTopAlbums = async () => {
      setTopLoading(true);
      try {
        const res = await axios.get("https://qtify-backend.labs.crio.do/albums/top");
        setTopAlbums(res.data);
      } catch (err) {
        console.error("Failed to fetch top albums", err);
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
        console.error("Failed to fetch new albums", err);
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
        console.error("Failed to fetch songs", err);
        setSongsError("Failed to load songs.");
      } finally {
        setSongsLoading(false);
      }
    };
    fetchSongs();
  }, []);

  return (
    <Box px={2}>

      {/* Top Albums */}
      <Box className="top-songs" mb={4}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">Top Albums</Typography>
            <Button variant="outlined" onClick={handleTopCollapse}>
                {topCollapsed ? "Collapse" : "Show All"}
            </Button>


        </Box>
        {topLoading ? (
          <Box textAlign="center" mt={2}><CircularProgress /></Box>
        ) : topError ? (
          <Typography color="error">{topError}</Typography>
        ) : topCollapsed ? (
          <Swiper modules={[Navigation]} navigation spaceBetween={20} breakpoints={swiperBreakpoints}>
            {topAlbums.map(album => (
              <SwiperSlide key={album.id}>
                <Card id={album.id} name={album.title} image={album.image} follows={album.follows} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Grid container spacing={2}>
            {topAlbums.map(album => (
              <Grid item key={album.id} xs={12} sm={6} md={4} lg={2}>
                <Card id={album.id} name={album.title} image={album.image} follows={album.follows} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      {/* New Albums */}
      <Box className="new-songs" mb={4}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">New Albums</Typography>
          <Button variant="outlined" onClick={handleNewCollapse}>
            {newCollapsed ? "Show All" : "Collapse"}
          </Button>
        </Box>
        {newLoading ? (
          <Box textAlign="center" mt={2}><CircularProgress /></Box>
        ) : newError ? (
          <Typography color="error">{newError}</Typography>
        ) : newCollapsed ? (
          <Swiper modules={[Navigation]} navigation spaceBetween={20} breakpoints={swiperBreakpoints}>
            {newAlbums.map(album => (
              <SwiperSlide key={album.id}>
                <Card id={album.id} name={album.title} image={album.image} follows={album.follows} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Grid container spacing={2}>
            {newAlbums.map(album => (
              <Grid item key={album.id} xs={12} sm={6} md={4} lg={2}>
                <Card id={album.id} name={album.title} image={album.image} follows={album.follows} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      {/* Songs */}
      <Box className="songs-section">
        <Typography variant="h6" mb={2}>Songs</Typography>
        {songsLoading ? (
          <Box textAlign="center" mt={2}><CircularProgress /></Box>
        ) : songsError ? (
          <Typography color="error">{songsError}</Typography>
        ) : songs.length === 0 ? (
          <Typography>No songs available.</Typography>
        ) : (
          <Swiper modules={[Navigation]} navigation spaceBetween={20} breakpoints={swiperBreakpoints}>
            {songs.map(song => (
              <SwiperSlide key={song.id}>
                <Card id={song.id} name={song.title} image={song.image} follows={song.likes} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Box>

    </Box>
  );
};

export default Songs;