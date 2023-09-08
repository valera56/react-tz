import React from 'react';
// @ts-ignore
import icon from "../../icon/Turkish_Airlines.svg.png";
import {useGetTicketsByNameQuery} from "../../store/services";
import './Ticket.css'
const Ticket = () => {
    const {data = []} = useGetTicketsByNameQuery()
    return (
        <div className="ticket-about">
            {
                data.map((ticket) => {
                    return (
                        <div key={ticket.id} className="ticket" >
                            <div className="logo-btn">
                                <img className="logo" src={icon} />
                                <button className='btn-price'>Купить за {ticket.price} P</button>
                            </div>
                            <div className="info">
                                <div className="origin">
                                    <p className='arrival_time'>{ticket.arrival_time}</p>
                                    <p className="origin-value">{ticket.origin},</p>
                                    <p className='origin_name'>{ticket.origin_name}</p>
                                    <p className="departure_date">{ticket.departure_date}</p>
                                </div>
                                <div className="div-stop">
                                    <p className="text-stop" >Пресадки</p>
                                    <p className="value-stops">{ticket.stops}</p>
                                </div>
                                <div className="carrier">
                                    <p className='departure_time'>{ticket.departure_time}</p>
                                    <p className="destination_name">{ticket.destination_name},</p>
                                    <p className="carrier-value">{ticket.carrier}</p>
                                    <p className='arrival_date'>{ticket.arrival_date}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div>
    );
};

export default Ticket;
