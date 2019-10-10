import react from "react";

class Chicken extends React.Component{

  constructor(props){
    super(props);

    this.state = {lifecycle: 0, counter: 0};
    // 0: Egg
    // 1: hatching
    // 2: baby
    // 3: front-facing
      this.updateLifecycle()
  }

    updateLifecycle() {
      setInterval(() => {
      let localCounter = this.state.counter;
      localCounter++;
      this.setState({counter: localCounter});

      if(localCounter == 2){
        this.setState({lifecycle: 1});
      }else if(localCounter == 4){
        this.setState({lifecycle: 2});
      }else if(localCounter == 6){
        this.setState({lifecycle: 3});
      }
    }, 1000)
  }

  showChicken(){
    if(this.state.lifecycle === 0){
      return(<span>🥚</span>);
    } else if(this.state.lifecycle === 1){
      return(<span>🐣</span>);
    }else if(this.state.lifecycle === 2){
      return(<span>🐤</span>);
    }else {
      return(<span>🐥</span>);
    }
  render(){
    return(

    );
  }
}
