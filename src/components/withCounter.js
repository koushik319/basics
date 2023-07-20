import React from "react"

const withCounter = (WrapperComponent)=>
{
    class WithCounter extends React.Component
    {
        constructor()
        {
            super()
            this.state={
                count:0
            }
        }
        updateCount=()=>
        {
            this.setState(prevState =>
                {
                   return {count:prevState.count + 1}
                })
        }
        render()
        {
            return <WrapperComponent 
            count={this.state.count} 
            updateCount={this.updateCount}
            />
        }
    }
    return WithCounter
}

export default withCounter