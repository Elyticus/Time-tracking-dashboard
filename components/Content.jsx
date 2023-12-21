export default function Content(props) {
  return (
    <div className="dashboard-card">
      <div className="icons">
        <img className="card-icon" src={props.img} alt="activity icon" />
      </div>

      <div className="card-details">
        <div className="card-activity-title">
          <p>{props.activity}</p>
          <img
            className="ellipsis-icon"
            src={props.cardIcon}
            alt="Ellipsis card icon"
          />
        </div>

        <div className="progress">
          <h1>{props.WeeklyHours}</h1>
          <h5>{props.Weeklydate}</h5>
        </div>
      </div>
    </div>
  );
}
