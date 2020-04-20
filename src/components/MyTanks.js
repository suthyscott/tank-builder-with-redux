import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class MyTank extends React.Component {
    constructor(){
        super()

        this.state = {
            noTanks: true,
            myTanks: []
        }
    }

    componentDidMount(){
        if(this.props.myTanks[0]){
            this.setState({
                noTanks: false,
                myTanks: this.props.myTanks
            })
        } 
    }
    

    render(){
        const {noTanks, myTanks} = this.state
        return(
            <main>
                <Link to='/'><button className='button'>Landing</button></Link>
                {noTanks ? (
                    <div className='burn'>
                        YOU DON'T HAVE ANY FREAKING TANKS SUCKER
                    </div>
                ) : (
                    <div>
                        {myTanks.map(tank => {     
                            return <div className='tank-info'>
                                <div id='title-pic'>
                                <h1>{tank.name}</h1> 

                                <img className='tank-image' src={tank.img} />
                                </div>

                                <p>{tank.gun.production}</p>
                                <p>{tank.crew}</p>
                                <p>Scott loves it: {tank.lovedByScott ? 'True' : 'Nope'}</p>
                                <p>On a scale of Sick-Nasty to Laaaaaame this tank is a {tank.coolTankRating}</p>    
                                <p>{tank.wars.map(e => <span className='war'>{e}, </span>)} </p>   
                            </div>
                            })}
                    </div>
                )
                }
            </main>
        )
    }
}

const mapStateToProps = state => {
    return {
        myTanks: state.myTanks
    }
}

export default connect(mapStateToProps)(MyTank)