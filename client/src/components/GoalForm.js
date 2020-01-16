import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addGoal } from '../../actions/goal'


const GoalForm = ({ addGoal }) => {
    
    const [text, setText] = useState('')

    return (
        <div>
            
        </div>
    )
}


export default connect(null , {addGoal})(GoalForm)
