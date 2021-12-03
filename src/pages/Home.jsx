import React from 'react';
import beers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'
import {Link} from 'react-router-dom'
export default function Home(props){
    return (
        <div>
            <div className="homeLinks">
                <Link to='/beers' ><img src={beers} alt="All Beers"/></Link>
                <h1>See all Beers</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat suscipit sapien quis ultricies. Etiam consequat, eros sit amet accumsan dapibus, eros odio eleifend dui, ut commodo lectus nunc consequat nunc. Morbi convallis tristique est sed blandit. In tincidunt scelerisque gravida. Etiam quam sem, sodales sed hendrerit dapibus, varius et tellus. Aenean vel diam sed libero cursus hendrerit. Donec varius leo sed erat efficitur, et dignissim orci aliquam. Duis dictum eros lorem, eget ullamcorper nisl faucibus ut.</p>
            </div>
            <div className="homeLinks">
                <Link to='/randomBeer' ><img src={randomBeer} alt="Random Beer"/></Link>
                <h1>Random Beer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat suscipit sapien quis ultricies. Etiam consequat, eros sit amet accumsan dapibus, eros odio eleifend dui, ut commodo lectus nunc consequat nunc. Morbi convallis tristique est sed blandit. In tincidunt scelerisque gravida. Etiam quam sem, sodales sed hendrerit dapibus, varius et tellus. Aenean vel diam sed libero cursus hendrerit. Donec varius leo sed erat efficitur, et dignissim orci aliquam. Duis dictum eros lorem, eget ullamcorper nisl faucibus ut.</p>

            </div>
            <div className="homeLinks">
                <Link to='/newBeer' ><img src={newBeer} alt="New Beer"/></Link>
                <h1>Add a new Beer!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat suscipit sapien quis ultricies. Etiam consequat, eros sit amet accumsan dapibus, eros odio eleifend dui, ut commodo lectus nunc consequat nunc. Morbi convallis tristique est sed blandit. In tincidunt scelerisque gravida. Etiam quam sem, sodales sed hendrerit dapibus, varius et tellus. Aenean vel diam sed libero cursus hendrerit. Donec varius leo sed erat efficitur, et dignissim orci aliquam. Duis dictum eros lorem, eget ullamcorper nisl faucibus ut.</p>
            </div>
        </div>
    )
}