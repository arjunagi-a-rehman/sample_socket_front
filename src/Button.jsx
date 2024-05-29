
function MyButton(){
  let number=0;
  let increase=()=>{
    console.log(number);
    number=number+1;
    return number;
  }
  return <button type="button"  onclick={increase()}>My Button {increase()}</button>
}

export default MyButton;