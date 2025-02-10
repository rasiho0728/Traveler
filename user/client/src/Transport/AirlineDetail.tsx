import React, { useEffect, useState } from 'react'
// 2025.0207. 11:00 추가: 최의진,
interface Airline {
    airline: string,
    flightNumber: string,
    departureTime: number,
    arrivalTime: number,
    price: number,
    flight:any,
}
const AirlineDetail: React.FC = () => {
    const [flights, setFlights] = useState<Airline[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<null | any>();

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const response = await fetch(
                    "https://sky.interpark.com/schedules/domestic/CJU-GMP-20250212?adt=2&chd=0&inf=0&seat=DOMESTIC_BASE&pickAirLine=&pickMainFltNo=&pickSDate="
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch flight data");
                }
                const data = await response.json();
                setFlights(data.flights || []);
            } catch (err) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchFlights();
    }, []);

    if (loading) return <p>Loading flights...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Flight Schedule (CJU → GMP)</h2>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Airline</th>
                        <th className="border p-2">Flight Number</th>
                        <th className="border p-2">Departure</th>
                        <th className="border p-2">Arrival</th>
                        <th className="border p-2">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {flights.map((flight, index) => (
                        <tr key={index} className="border">
                            <td className="border p-2">{flight.airline}</td>
                            <td className="border p-2">{flight.flightNumber}</td>
                            <td className="border p-2">{flight.departureTime}</td>
                            <td className="border p-2">{flight.arrivalTime}</td>
                            <td className="border p-2">{flight.price} KRW</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default AirlineDetail