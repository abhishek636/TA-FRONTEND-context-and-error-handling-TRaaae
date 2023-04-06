import React from "react";

function withSearch(Comp){
    return class EnhancedComponents extends React.Component{
        state ={
            searchTerm: "",
        };
        handleChange = ({ target: { value } }) => {
            this.setState({ searchTerm: value });
        };
        render(){
            return <Comp 
                searchTerm={this.state.searchTerm}
                handleChange={this.handleChange}
            />
        }
    }
}

export default withSearch;