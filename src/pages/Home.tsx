import { IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton
} from '@ionic/react';

const Home: React.FC = () => (
    <IonPage>
        <IonContent fullscreen>
        <IonHeader collapse="condense">
            <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
            <IonButton size="large" routerLink="/App"> </IonButton>
            </IonToolbar>
        </IonHeader>
        </IonContent>
    </IonPage>
);

export default Home;
