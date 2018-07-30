import React, { Component } from 'react';

class ProgressTracker extends Component {
    render() {
        return (
            <div className="progress-tracker">
                <label className="progress-tracker-label"> Progress Tracker</label>
                    <div>
                        0%
                    </div>
            </div>
        )
    }
}

export default ProgressTracker;