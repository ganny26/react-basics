import React from 'react';


const ProfilePic = React.createClass({
    render(){
        return (
            <img src={this.props.imageurl} height="200px" width="300px" />
        );
    }
});

const ProfileName = React.createClass({
    render(){
        return(
            <div>
                {this.props.name}
            </div>
        );
    }
});


const ProfileLink = React.createClass({
    render(){
        return(
            <div>
                <a href={'https://github.com' + this.props.name}>{this.props.name}</a>
            </div>
        );
    }
});


class Avatar extends React.Component{
    render(){
        return(
            <div>
                <ProfileName name = {this.props.user.name} />
                <ProfilePic imageurl = {this.props.user.image}/>
                <ProfileLink name = {this.props.user.username}/>
            </div>
        )
    }
}

export default Avatar;