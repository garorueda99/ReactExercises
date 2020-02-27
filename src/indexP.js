import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';

let skiData = {
    total: 50,
    powder: 20,
    backcountry: 10, 
    goal: 100   
}

const getPercent = decimal => decimal *100 + '%'
const calcGoalProgress = (total, goal) => getPercent(total/goal)

const SkiDayCounter = ({total, powder, backcountry, goal}) => {
    return (
        <section>
            <div>
                <p>Total Days: {total}</p>
            </div>
            <div>
                <p>Powder Days: {powder}</p>
            </div>   <div>
                <p>Backcountry Days: {backcountry}</p>
            </div>
            <div>
                <p>Goal: {goal}</p>
            </div>
            <div>
                <p>Goal Progress: {calcGoalProgress(total, goal)}</p>
            </div>
        </section>
    )
}

/*class SkiDayCounter extends Component{
    getPercent = decimal => decimal *100 + '%'
    calcGoalProgress = (total, goal) => this.getPercent(total/goal)
    render() {
        //const {total, powder, backcountry, goal} = this.props
        return (
            <section>
                <div>
                    <p>Total Days: {this.props.total}</p>
                </div>
                <div>
                    <p>Powder Days: {this.props.powder}</p>
                </div>   <div>
                    <p>Backcountry Days: {this.props.backcountry}</p>
                </div>
                <div>
                    <p>Goal: {this.props.goal}</p>
                </div>
                <div>
                    <p>Goal Progress: {this.calcGoalProgress(this.props.total, this.props.goal)}</p>
                </div>
            </section>
        )
    }
}
*/
render(
    <SkiDayCounter 
        total = {skiData.total}
        powder = {skiData.powder}
        backcountry = {skiData.backcountry}
        goal =  {skiData.goal}/>,
    document.getElementById('root')
)
