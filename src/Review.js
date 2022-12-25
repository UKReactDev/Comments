import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

//Review adında component oluşturuldu..
const Review = () => {
  //Kisiler'in içeriğine ulaşmak için İndex state'i ve onun fonksiyonu setIndex oluşturuldu..Baslangıç degeri 0 atandı.
  const [index, setIndex] = useState(0);
  //Oluşturulan index ile kişilere isim,meslek,resim,açıklama atandı..
  const { name, job, image, text } = people[index];
  //Kişiler Listesine Numara atamak için Numara kontrol fonksiyon oluşturuldu..
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  //Sonraki kisi index'i için fonsiyon oluşturuldu.. 
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  //Önceki kişi index'i için fonksiyon oluşturuldu..
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  //Rasgele kişi seçmek için fonksiyon oluşturuldu..
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;