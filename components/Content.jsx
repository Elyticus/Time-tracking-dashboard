import data from "../src/data";

export default function Content(props) {
  const dataArr = data.map((item) => (
    <div className="dashboard-card" key={item.id}>
      <div className="icons">
        <img className="card-icon" src={item.img} alt="activity icon" />
      </div>

      <div className="card-details">
        <div className="card-activity-title">
          <p>{item.activity}</p>
          <img
            className="ellipsis-icon"
            src={item.cardIcon}
            alt="Ellipsis card icon"
          />
        </div>

        <div className="progress">
          {/* Use selectedTimeFrame to determine which data to display */}
          <h1>{item[`${props.selectedTimeFrame}Hours`]}</h1>
          <h5>{item[`${props.selectedTimeFrame}Date`]}</h5>
        </div>
      </div>
    </div>
  ));

  return <div className="dashboard-data">{dataArr}</div>;
}
