import React, { Component } from 'react';
import './footer.css';
import './img2.png';
class Footer extends Component {
  render() {
	  
    return (
    <div className="footer_wrap">
		<footer className="footer">
        <div className="footer_social">
            <p>Shop24 в социальных сетях:</p>
            <a href="https://vk.com/shop24tv"><div className="fa fa-vk"></div></a>
            <a href="https://www.facebook.com/Shop24-Ваш-надежный-эксперт-2021105341541179"><div className="fa fa-facebook"></div></a>
            <a href="https://www.ok.ru/shop24/"><div className="fa fa-odnoklassniki"></div></a>
            <a href="http://instagram.com"><div className="fa fa-instagram"></div></a>       
            <a href="https://www.youtube.com/channel/UCBu0BKbDNL09ihRHK5wWzvQ?sub_confirmation=1"><div className="fa fa-youtube"></div></a>
            <a href="https://www.pinterest.com"><div className="fa fa-pinterest"></div></a>
            <a href="https://www.twitter.com"><div className="fa fa-twitter"></div></a>
        </div> 
		</footer>
		<footer className="footer_second">
            
                <div className="infoPre">
                    <div className="info">
                    <div><img src={require('./img2.png')}/></div>
                        <div>
                            <ul>
                                <li className="phone">8 (800) 500-75-55*</li>
                                <li>*Бесплатный звонок по всей России</li>
                                <li className="phone">8 (495) 733-96-03</li>
                            </ul>          
                        </div>                     
                        <div>
                            <ul>
                                <li>Каталог товаров</li>
                                <li><a href="/products/odejda_i_aksessuary/">Одежда и аксессуары</a></li>
                                <li><a href="/products/obuv/">Обувь</a></li>
                                <li><a href="/products/ukrasheniya/">Украшения</a></li>
                                <li><a href="/products/krasota_i_zdorove/">Красота и здоровье</a></li>
                                <li><a href="/products/tovary_dlya_doma_dachi_i_otdyha/">Товары для дома</a></li>
                                <li><a href="/products/tovary_dlya_kuhni/">Товары для кухни</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Заказ</li>
                                <li>
                                    <a href="/info/dostavka/">Доставка и оплата</a>
                                </li>
                                <li>
                                    <a href="/info/vozvrat/">Возврат</a>
                                </li>
                                <li>
                                    <a href="/info/faq/">Помощь</a>
                                </li>
                                <li>
                                    <a href="/info/soglashenie/">Пользовательское соглашение</a>
                                </li>
                                <li>
                                    <a href="/info/politika_obrabotki_personalnykh_dannykh/">Политика обработки персональных данных</a>
                                </li>
                                <li>
                                    <a href="/info/soglasie_na_obrabotku_personalnykh_dannykh/">Согласие на обработку персональных данных</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            
                            <ul>
                                <li>Shop24</li>
                                <li><a href="/shop24bonus/">Shop24 Бонус</a></li>
                                <li><a href="/telecast/"> Смотреть прямой эфир </a></li>
                                <li><a href="/telecast/timetable/"> Расписание передач </a></li>
                                <li><a href="/action/"> Акции </a></li>
                                <li><a href="/personal/"> Личный кабинет </a></li>
                                <li><a href="/search/map/"> Поиск и карта сайта </a></li>
                                <li><a href="/brand/map/"> Карта брендов </a></li>
                                <li><a href="#"> Обратная связь </a></li>
                            </ul>
                        </div>
                        <div>
                        
                        <ul>
                            <li>Информация</li>
                            <li>
                                <a href="/info/o_kanale/">О канале</a>
                            </li>
                            <li>
                                <a href="/info/sotrudnichestvo/">Сотрудничество</a>
                            </li>
                            <li>
                                <a href="/info/pokupayte_s_nami/">Покупайте с нами!</a>
                            </li>
                            <li>
                                <a href="/info/contacts/">Контакты</a>
                            </li>
                        </ul>
                        </div>  
                    </div>
                </div>
		</footer>
		<footer className="footer_third">
            <div>
                <p>Copyright © Товар ООО «Стиль и Мода», 2014-2016. Все права защищены.</p>
                <p>При использовании материалов сайта ссылка на www.shop24.com обязательна.</p> 
                <p>115198, Москва ул. Кожуховская 5-ая, д. 9, помещение VII</p>
                <p>Телефон 8-800 500-75-55</p>
            </div>
        </footer>
    </div>
    );
  }
}

export default Footer;