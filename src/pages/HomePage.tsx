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

import { pin, key, wine, walk } from 'ionicons/icons';

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
                        <h1 style={{fontSize: "100px", display: "table-cell", verticalAlign: "middle", color:"white"}}>
                            Titolo progetto
                        </h1>
                    </IonText>
                </div>
                <div id="about">
                    <div id="centered">
                        <h2>NFTs to certificate your limited editions.</h2>
                        <IonGrid>
                            <IonRow>
                                {/* Sta roba perchè class="ion-align-items-center" non va */}
                                <IonCol sizeXs="0" sizeSm="3" />
                                <IonCol sizeXs="12" sizeSm="3">
                                    <IonCard>
                                        <IonItem>
                                            <IonIcon icon={key} slot="start" />
                                            <IonLabel>All the safety you need</IonLabel>
                                        </IonItem>
                                        <IonCardContent>
                                            Much safeness very blockchain.
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol sizeXs="12" sizeMd="3">
                                    <IonCard>
                                        <IonItem>
                                            <IonIcon icon={pin} slot="start" />
                                            <IonLabel>Cheap enough</IonLabel>
                                        </IonItem>

                                        <IonCardContent>
                                            Cheap maybe
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                {/* Sta roba perchè class="ion-align-items-center" non va */}
                                <IonCol sizeXs="0" sizeSm="3" />
                                <IonCol sizeXs="12" sizeSm="3">
                                    <IonCard>
                                        <IonItem>
                                            <IonIcon icon={wine} slot="start" />
                                            <IonLabel>Very cool</IonLabel>
                                        </IonItem>

                                        <IonCardContent>
                                            It's cool even if it's hot
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol sizeXs="12" sizeSm="3">
                                    <IonCard>
                                        <IonItem>
                                            <IonIcon icon={walk} slot="start" />
                                            <IonLabel>Very digital</IonLabel>
                                        </IonItem>

                                        <IonCardContent>
                                            It's digital
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
