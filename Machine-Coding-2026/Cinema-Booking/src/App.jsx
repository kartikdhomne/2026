import React, { useState, useMemo } from "react";

const CinemaSeatBooking = ({
  layout = { rows: 8, seatsPerRow: 12, aislePosition: 5 },
  seatTypes = {
    regular: {
      name: "Regular",
      price: 150,
      rows: [0, 1, 2],
      color: "bg-blue-100",
    },
    premium: {
      name: "Premium",
      price: 250,
      rows: [3, 4, 5],
      color: "bg-purple-100",
    },
    vip: { name: "VIP", price: 350, rows: [6, 7], color: "bg-yellow-100" },
  },
  bookedSeats = [],
  currency = "₹",
  onBookingComplete = () => {},
  title = "Cinema Hall Booking",
  subTitle = "Select your preferred seats",
}) => {
  const [selected, setSelected] = useState([]);

  // 🔥 Precompute row → seatType map (O(1) lookup)
  const rowTypeMap = useMemo(() => {
    const map = {};
    Object.values(seatTypes).forEach((type) => {
      type.rows.forEach((row) => {
        map[row] = type;
      });
    });
    return map;
  }, [seatTypes]);

  const toggleSeat = (id) => {
    if (bookedSeats.includes(id)) return;

    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
  };

  const getSeatMeta = (row, id) => {
    if (bookedSeats.includes(id)) return { color: "bg-gray-400", price: 0 };

    const type = rowTypeMap[row];
    if (!type) return { color: "bg-gray-200", price: 0 };

    if (selected.includes(id))
      return { color: "bg-green-500 text-white", price: type.price };

    return { color: type.color, price: type.price };
  };

  const total = selected.reduce((sum, seatId) => {
    const row = seatId.charCodeAt(0) - 65;
    return sum + (rowTypeMap[row]?.price || 0);
  }, 0);

  const handleBooking = () => {
    onBookingComplete(selected);

    alert(`Seats Booked: ${selected.join(", ")}\nTotal: ${currency}${total}`);

    setSelected([]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow">
      {/* Header */}
      <h1 className="text-xl font-semibold text-center">{title}</h1>
      <p className="text-center text-gray-500 text-sm mb-4">{subTitle}</p>

      {/* Screen */}
      <div className="h-2 bg-gray-300 rounded-full mb-6 mx-10" />
      <p className="text-center text-xs text-gray-400 mb-6">SCREEN</p>

      {/* Seats */}
      <div className="space-y-2">
        {Array.from({ length: layout.rows }).map((_, row) => {
          const rowLabel = String.fromCharCode(65 + row);

          return (
            <div key={row} className="flex justify-center gap-2">
              <span className="w-4 text-sm text-gray-500">{rowLabel}</span>

              {Array.from({ length: layout.seatsPerRow }).map((_, col) => {
                const id = `${rowLabel}${col + 1}`;
                const { color } = getSeatMeta(row, id);

                return (
                  <React.Fragment key={id}>
                    {col === layout.aislePosition && <div className="w-4" />}

                    <button
                      onClick={() => toggleSeat(id)}
                      disabled={bookedSeats.includes(id)}
                      className={`w-7 h-7 text-xs rounded border border-gray-300 ${color}`}
                    >
                      {col + 1}
                    </button>
                  </React.Fragment>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-6 text-sm">
        {Object.values(seatTypes).map((type) => (
          <Legend
            key={type.name}
            color={type.color}
            label={`${type.name} (${currency}${type.price})`}
          />
        ))}
        <Legend color="bg-green-500" label="Selected" />
        <Legend color="bg-gray-400" label="Booked" />
      </div>

      {/* Summary */}
      <div className="mt-6 border-t pt-4 text-sm">
        <p className="text-gray-500">Booking Summary</p>
        <p className="text-gray-400 text-xs">
          {selected.length
            ? `Selected: ${selected.join(", ")}`
            : "No seats selected"}
        </p>
        <p className="font-semibold mt-1">
          Total: {currency}
          {total}
        </p>
      </div>

      {/* Button */}
      <button
        disabled={!selected.length}
        onClick={handleBooking}
        className={`w-full mt-4 py-2 rounded-lg text-white transition
          ${
            selected.length ? "bg-green-500 hover:bg-green-600" : "bg-gray-300"
          }`}
      >
        Book Now
      </button>
    </div>
  );
};

const Legend = ({ color, label }) => (
  <div className="flex items-center gap-2">
    <div className={`w-4 h-4 rounded ${color}`} />
    <span>{label}</span>
  </div>
);

export default CinemaSeatBooking;
