import { RouteComponentProps } from 'react-router-dom';
import {
  IonPage,
  IonButton,
  IonContent,
  IonText
} from '@ionic/react';

import './HomePage.css';

import background_video from "../images/background_video.mp4"

const HomePage: React.FC<RouteComponentProps> = (props) => {
    return <IonPage>
            <IonContent className="ion-padding">
                <video id="videobackground" className='videobackground' playsInline loop muted autoPlay>
                    <source src={background_video} type='video/mp4' />
                </video>
                <IonButton
                    id="bottoneapp"
                    onClick={e => {
                        e.preventDefault();
                        props.history.push('/tabs');
                    }}>
                    App
                </IonButton>
                <IonText id="titolo">
                    <h1 style={{fontSize: "100px", display: "table-cell", verticalAlign: "middle"}}>
                        Titolo progetto
                    </h1>
                </IonText>
            </IonContent>
        </IonPage>
}

export default HomePage;
