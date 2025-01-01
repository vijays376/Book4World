import { useState } from "react";
import Modal from "./Modal";

const Card = ({ book }) => {
    // console.log("book", book);
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState(null);

    return (
        <>
            {book.map((item) => {
                const thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;
                const amount = item.saleInfo?.listPrice?.amount;

                if (thumbnail && amount !== undefined) {
                    return (
                        <div
                            className="card"
                            key={item.id}
                            onClick={() => {
                                setShow(true);
                                setItem(item);
                            }}
                        >
                            <img src={thumbnail} alt={`${item.volumeInfo.title} cover`} />
                            <div className="bottom">
                                <h3 className="title">{item.volumeInfo.title}</h3>
                                <p className="details">Click for Details</p>
                            </div>
                        </div>
                    );
                }
                return null; // Skip rendering if thumbnail or amount is undefined
            })}
            {bookItem && <Modal show={show} item={bookItem} onClose={() => setShow(false)} />}
        </>
    );
};

export default Card;
