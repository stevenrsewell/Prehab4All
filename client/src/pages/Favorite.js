import React, { useState, useEffect } from "react";
import HeroSmall from "../components/HeroSmall";
import Container from "../components/Container";
import NavbarC from "../components/NavbarC/index";
import API from "../utils/API"
import FavoriteResult from "../components/FavoriteResult";



function Myvideos(props) {

  //state to hold the repsonse
  const [favorites, setFavorites] = useState([]);

  let userId = localStorage.getItem("userID");
  console.log(userId);
  useEffect(() => {

    API.getAllFavorites(userId).then((res) => {
      console.log("DATA", res.data);

      const favoritesFromAPI = res.data[0].favorites.map(favorite => {
        var str = favorite;
        var video = str.slice(2);//to slice at the Beginning 
        var videos = video.slice(0, -5);
        return {
          url: videos
        }
      })

      setFavorites(favoritesFromAPI);

    })
      .catch(err => (err));
  }, []);
  console.log("FAVORITES", favorites);
  return (
    <div>
      <NavbarC />
      <div>
        <HeroSmall backgroundImage="https://kromboommedical.co.za/wp-content/uploads/2016/09/image3.jpg">
          <h1>My Favorite Videos</h1>
        </HeroSmall>
        <Container style={{ marginTop: 55, marginRight: 120 }}>
          <div className="row">
            <div className="col-lg-12">
              {
                favorites.map(favorite => {
                  console.log("FAVORITE", favorite);
                  return <FavoriteResult favorite={favorite} />
                })
              }
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
export default Myvideos;