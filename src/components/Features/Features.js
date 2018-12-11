import React from 'react';
import clock from './img/Clock.png';
import online from './img/online.png';
import transparently from './img/transparently.png';
import secure from './img/secure.png';
import s from './Features.css';
import withStyles from '../../../node_modules/isomorphic-style-loader/lib/withStyles';


class Features extends React.Component {
    render(){
        return(
            <section id="features">
			<div className="features__wrapper">
				<div className="container">
					<div className="features__heading">
						<h2>Кредит онлайн <span>Почему Alex Credit?</span> </h2>
					</div>
					<div className="features__card">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
								<div className="card__wrapper-fast">
									<div className="card__image">
										<img src={clock}/>
									</div>
									<div className="card__heading">
										<h3>Быстро</h3>
									</div>
									<div className="card__description">
										<p>Процесс подтверждения заявок на онлайн-займ в Alex Сredit полностью автоматизирован. Поданные вами данные
											обрабатываются мгновенно, и уже через несколько минут вы увидите деньги на вашем счету</p>
									</div>
								</div>
							</div>
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
								<div className="card__wrapper-online">
									<div className="card__image">
										<img src={online} alt=""/>
									</div>
									<div className="card__heading">
										<h3>Онлайн</h3>
									</div>
									<div className="card__description">
										<p>Чтобы получить кредит, вам не нужно идти в банк, занимать очередь и заполнять многостраничные анкеты.
											Просто отправьте нам заявку на экспресс-кредит, и вы получите деньги в любое удобное для вас время, где бы
											вы ни находились</p>
									</div>
								</div>
							</div>
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
								<div className="card__wrapper-transparently">
									<div className="card__image">
										<img src={transparently} alt=""/>
									</div>
									<div className="card__heading">
										<h3>Прозрачно</h3>
									</div>
									<div className="card__description">
										<p>Когда вы берете онлайн-займ на карту, то можете быть уверены: нет никаких скрытых комиссий и непонятных
											условий в договоре! Полная информация о наших услугах всегда доступна нашим клиентам</p>
									</div>
								</div>
							</div>
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
								<div className="card__wrapper-secure">
									<div className="card__image">
										<img src={secure} alt=""/>
									</div>
									<div className="card__heading">
										<h3>Безопасно</h3>
									</div>
									<div className="card__description">
										<p>Все персональные данные клиентов надежно защищенны. Наши клиенты могут быть уверены в качестве защиты
											персональных данных</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        );
    }
}
export default withStyles(s, Features);
