import React, { Component } from 'react';
import Icon from '../icon';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                { Icon('fas fa-check', 'library-course__icon') }
                { Icon('fas fa-plus-circle', 'library-course__action')}

                <div className="library-course__description"> 
                    <label>Course Description</label>
                    <p> aldskfj alsdkfj; adsf jlads ;lkjd f;adkfj  askdfl adslfk alsdkfj fkldf jfdk aldkfj </p>    
                </div>
            </div>
        )
    }
}

export default LibraryCourse;