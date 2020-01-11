import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getProfileById } from "../../actions/profile";

const Profile = ({ match, getProfileById, profile: { profile, loading } }) => {
  useEffect(() => {
    
    getProfileById(match.params.id);

  }, [getProfileById]);

  return <div>Profile</div>;
};

Profile.propTypes = {
  getProfileById: PropTypes.func,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);
