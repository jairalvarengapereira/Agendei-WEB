function Appointment(props) {
  let dt = null;
  try {
    const dateStr = props.booking_date
      ? props.booking_date.toString().substring(0, 10)
      : null;
    dt =
      dateStr && props.booking_hour
        ? new Date(dateStr + "T" + props.booking_hour)
        : null;
  } catch (e) {
    dt = null;
  }

  return (
    <tr>
      <td>{props.user}</td>
      <td>{props.doctor}</td>
      <td>{props.service}</td>
      <td>
        {dt
          ? new Intl.DateTimeFormat("pt-BR", { dateStyle: "short" }).format(
              dt
            ) +
            " - " +
            props.booking_hour +
            "h"
          : "Data não informada"}
      </td>
      <td className="text-end">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(props.price || 0)}
      </td>
      <td className="text-end">
        <div className="d-inline me-2">
          <button
            onClick={() => props.clickEdit(props.id_appointment)}
            className="btn btn-primary btn-action"
          >
            <i className="bi bi-pencil-square"></i>
          </button>
        </div>
        <button
          onClick={() => props.clickDelete(props.id_appointment)}
          className="btn btn-danger btn-action"
        >
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
}

export default Appointment;
