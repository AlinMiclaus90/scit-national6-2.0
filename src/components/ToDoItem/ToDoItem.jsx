import "./ToDoItem.css";

export function ToDoItem(props) {
  // console.log(props);

  return (
    <div className="to-do-item">
      <input type="checkbox" defaultChecked={props.checkValue} />
      <p>{props.label}</p>
      <img
        src="https://www.flaticon.com/svg/vstatic/svg/860/860829.svg?token=exp=1618938202~hmac=5372da9d227dec8ad0c250a251d064ab"
        alt="trash can"
        onClick={(event) => props.removeItem(props.label)}
      />
    </div>
  );
}
