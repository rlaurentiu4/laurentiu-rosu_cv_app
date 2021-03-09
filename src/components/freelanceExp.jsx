import React from 'react'

class Freelance extends React.Component {
    constructor(props){
        super(props)
    }

    renderFreExp () {
        let data = this.props.userInfo;
        const renderInf = data.map((data)=> (
            <div key={data.id} className="big_mg mg_bott anim_fade-in">
                <ul>
                    <div className="flex_row">
                        <h2>{data.id}.{data.name_project}</h2>
                        <h3>Date: {data.date}</h3>
                    </div>
                    <li>
                        <p>{data.description_project}</p>
                    </li>
                </ul>
            </div>
        ));
        return renderInf;
    }
    render() {
        let info = this.renderFreExp();
        return (
            <div>
                <div>{info}</div>
            </div>
        )
    }
}

export default Freelance;