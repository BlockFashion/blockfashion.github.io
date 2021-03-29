import { RouteComponentProps } from 'react-router-dom';
import {
  IonPage,
  IonButton,
  IonHeader,
  IonToolbar,
  IonContent,
  IonTitle,
} from '@ionic/react';

const HomePage: React.FC<RouteComponentProps> = (props) => {
    return <IonPage>
            <IonHeader>
            <IonToolbar>
                <IonTitle>Home</IonTitle>
            </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton
                    size="large"
                    onClick={e => {
                        e.preventDefault();
                        props.history.push('/tabs');
                    }}>
                    App
                </IonButton>
            </IonContent>
        </IonPage>
}

export default HomePage;
