import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGoals } from "../../actions/goal";
import Spinner from "../layout/Spinner";
import Navbar from "../dashboard/Navbar";

const Goals = ({ getGoals, goal: { goals, loading } }) => {

  useEffect(() => {
      
    getGoals();

  }, [getGoals]);

  return (
    <div>
      <Navbar />
      Goals
    </div>
  );
};

Goals.propTypes = {
  getGoals: PropTypes.func.isRequired,
  goal: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  goal: state.goal
});

export default connect(mapStateToProps, { getGoals })(Goals);
