import { RouteComponentProps } from 'react-router-dom';
import {
  IonPage,
  IonButton,
  IonContent,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonHeader, IonTitle, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel,
} from '@ionic/react';

import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

import './HomePage.css';

import background_video from "../images/background_video.mp4"

const HomePage: React.FC<RouteComponentProps> = (props) => {
    return <IonPage>
            <IonContent>
                <div id="copertina">
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
                </div>
                <div id="about">
                    <div id="centered">
                        <h2>NFTs to certificate your limited editions.</h2>
                        <IonGrid style={{marginLeft: "auto"}}>
                            <IonRow>
                                <IonCol>
                                    <IonCard className="cardabout">
                                        <IonItem>
                                            <IonIcon icon={pin} slot="start" />
                                            <IonLabel>ion-item in a card, icon left, button right</IonLabel>
                                        </IonItem>

                                        <IonCardContent>
                                            This is content, without any paragraph or header tags,
                                            within an ion-cardContent element.
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol>
                                    <IonCard style={{width: "30%", marginLeft: "20%"}}>
                                        <IonItem>
                                            <IonIcon icon={pin} slot="start" />
                                            <IonLabel>ion-item in a card, icon left, button right</IonLabel>
                                        </IonItem>

                                        <IonCardContent>
                                            This is content, without any paragraph or header tags,
                                            within an ion-cardContent element.
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonCard style={{width: "30%", marginLeft: "50%"}}>
                                        <IonItem>
                                            <IonIcon icon={pin} slot="start" />
                                            <IonLabel>ion-item in a card, icon left, button right</IonLabel>
                                        </IonItem>

                                        <IonCardContent>
                                            This is content, without any paragraph or header tags,
                                            within an ion-cardContent element.
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol>
                                    <IonCard style={{width: "30%", marginLeft: "20%"}}>
                                        <IonItem>
                                            <IonIcon icon={pin} slot="start" />
                                            <IonLabel>ion-item in a card, icon left, button right</IonLabel>
                                        </IonItem>

                                        <IonCardContent>
                                            This is content, without any paragraph or header tags,
                                            within an ion-cardContent element.
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </div>
                </div>
                <div className="footer">
                    <IonText id="centered">
                        <p>Blockfahion 2021</p>
                    </IonText>
                </div>
            </IonContent>
        </IonPage>
}

export default HomePage;
