import React, { Component  } from 'react';

class Githubcard extends Component{
    constructor(props){
        super(props);
        this.state ={
            user:null,
            loading:false,
            error:null,
        }
    }

    componentDidMount(){
        this.setState({ loading:true , error:null });

            fetch(`https://api.github.com/users/${this.props.username}`)
            .then((response) => response.json())
            .then((data) => {
                if(data.message){
                    this.setState({ error:data.message,loading:false })
                }
                else{
                    this.setState({ user:data, loading:false})
                }


            })
            .catch((error) =>{
                this.setState({ error:'link not working ',loading:false});
            });
    }
    render(){
        const {user,loading,error} = this.state;
        if(loading){
            return <>Loading...!!</>
        }
        if(error){
            return <div>Error:{error}</div>
        }
        if(!user){
            return <>user data not found...</>
        }
        return(
            <div className='github-card'>
                <img src={user.avatar_url} alt={user.login} />
                <h2> {user.login} </h2>
                <p>{user.bio}</p>
                <a href={user.html_url} target='_blank' rel='noopener noreferrer'>visit github</a>
            </div>
        )



    }


}

export default Githubcard;