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

const Link = React.createClass({
    render(){
        return(
            <span>{this.props.children}</span>
        );
    }
});

const ProfileLink = React.createClass({
    render(){
        return(
            <Link>
                <a href={'https://github.com/' + this.props.name}>{this.props.name}</a>
            </Link>
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