import React from 'react';

const Modal = ({ show, item, onClose }) => {
    if (!show || !item) {
        return null;
    }

    const thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;
    const amount = item.saleInfo?.listPrice?.amount;

    return (
        <div className="overlay">
            <div className="overlay-inner">
                <div className="inner-box">
                    {thumbnail && <img src={thumbnail} alt={`${item.volumeInfo.title} cover`} />}
                    <div className="info">
                        <h1>{item.volumeInfo.title}</h1>
                        <h3>{item.volumeInfo.authors?.join(", ")}</h3>
                        <h4>
                            {item.volumeInfo.publisher} <span>{item.volumeInfo.publishedDate}</span>
                        </h4>
                        <br />
                        <a href={item.volumeInfo.previewLink}>
                            Open Book
                        </a>
                        <a href={item.volumeInfo.previewLink}>
                            {amount && <span>Price: ₹{amount}</span>}
                        </a>
                    </div>
                </div>
                <button className="close" onClick={onClose}>
                    <i className="fas fa-times"></i>
                </button>
                <h4 className="description">{item.volumeInfo.description}</h4>
            </div>
        </div>
    );
};

export default Modal;
