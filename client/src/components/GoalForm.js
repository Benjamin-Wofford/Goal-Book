import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addGoal } from '../../actions/goal'


const GoalForm = ({ addGoal }) => {

    const [text, setText] = useState('')

    return (
        <div>
          {/* Create the material ui version of what is on vlc    */}
        </div>
    )
}


export default connect(null , {addGoal})(GoalForm)
