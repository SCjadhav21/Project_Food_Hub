import React from "react";
import { useParams, Link } from "react-router-dom";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

const SingleUserPage = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = React.useState({});

  React.useEffect(() => {
    getData(`https://kindmeal-db.onrender.com/address/${id}`).then((res) =>
      setUserDetails(res.data)
    );
  }, [user_id]);

  // console.log(userDetails);
  return (
    <>
      <img src={userDetails.avatar} alt="prof-pic" />
      <p>
        Name : {userDetails.first_name} {userDetails.last_name}
      </p>
      <p>Email : {userDetails.email}</p>
      <Link to="/users">GO BACK</Link>
    </>
  );
};

export default SingleUserPage;