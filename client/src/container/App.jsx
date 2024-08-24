import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "../components/about";
import CardList from "../components/CardList";
import Foot from "../components/footer";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [sidebarData, setSidebarData] = useState({
    searchTerm: "",
    category: "",
  });
  const [showMore, setShowMore] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    const categoryFromUrl = urlParams.get("category");
    if (searchTermFromUrl || categoryFromUrl) {
      setSidebarData({
        ...sidebarData,
        searchTerm: searchTermFromUrl,
        category: categoryFromUrl,
      });
    }

    const getMoviesData = async () => {
      try {
        const searchQuery = urlParams.toString();
        const res = await fetch(`/api/getmovies?${searchQuery}`);
        if (res.ok) {
          const data = await res.json();
          setPosts(data.Movies);
          if (data.Movies.length === 9) {
            setShowMore(true);
          } else {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getMoviesData();
  }, [location.search]);

  const handleChange = (e) => {
    if (e.target.id === "searchTerm") {
      setSidebarData({ ...sidebarData, searchTerm: e.target.value });
    }
    if (e.target.id === "category") {
      const category = e.target.value || "uncategorized";
      setSidebarData({ ...sidebarData, category });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", sidebarData.searchTerm);
    urlParams.set("category", sidebarData.category);
    const searchQuery = urlParams.toString();
    console.log(searchQuery);
    navigate(`/?${searchQuery}`);
  };

  const handleShowMore = async () => {
    const numberOfPosts = posts.length;
    const startIndex = numberOfPosts;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("startIndex", startIndex);
    const searchQuery = urlParams.toString();
    const res = await fetch(`/api/getmovies?${searchQuery}`);
    if (!res.ok) {
      return;
    }
    if (res.ok) {
      const data = await res.json();
      setPosts([...posts, ...data.Movies]);
      console.log(data.Movies);
      if (data.Movies.length === 9) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
    }
  };

  return (
    <div>
      <div className="overflow-x-hidden">
        <Navbar
          sidebardata={sidebarData.category}
          submit={handleSubmit}
          change={handleChange}
        />
        <br />
        <br />
        <br />
        <Routes>
          <Route
            path="/"
            element={
              <CardList
                posts={posts}
                showMore={showMore}
                handleShowMore={handleShowMore}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Foot />
    </div>
  );
}
