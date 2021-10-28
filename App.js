import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';


// #15202B cor do twitter 

export default function App() {
  const[like, setLike] = useState(require('./src/img/like.png'))

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#15202B" />

      <View style={styles.header}>
        <Image 
        style={styles.fotoPerfil}  
        source={require('./src/img/foto-perfil.jpg')}      
        />

        <Image
        style={styles.logoTwitter}
        source={require('./src/img/logoTwitter.png')}
        />

        <TouchableOpacity>
          <Image
          style={styles.star}
          source={require('./src/img/star.png')}
          />
        </TouchableOpacity>
      </View> 

      <ScrollView>
        <View style={styles.publi}>
          
          <View style={styles.publiOne}>
          
          <View style={styles.fotoNome}>

          <Image 
          style={styles.publiPerfil}
          source={require('./src/img/foto-perfil.jpg')}
          />
          <Text style={styles.nomePerfil}>Kleber Lucas</Text>
          <Text style={styles.sobrePerfil}>@Kleber_crvg70</Text>
          </View>
          <Text style={styles.comentPerfil}>Código dando bom... Ainda bem, estava ficando louco com este erro!!</Text>

          <View style={styles.icon}>

          <TouchableOpacity>
            <Image 
            source={require('./src/img/comentario.png')}
            style={styles.iconComent}
            />

          </TouchableOpacity>

          <TouchableOpacity>
            <Image 
            style={styles.iconRT}
            source={require('./src/img/rt.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
            style={styles.iconLike}
            source={require('./src/img/like.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image 
            source={require('./src/img/compartilhado.png')}
            style={styles.iconCompartilhado}
            />
          </TouchableOpacity>

          </View>
        
          </View>


          <View style={styles.publiTwo}>
          
          <View style={styles.fotoNome}>

          <Image 
          style={styles.publiPerfil}
          source={require('./src/img/foto-perfil.jpg')}
          />
          <Text style={styles.nomePerfil}>Kleber Lucas</Text>
          <Text style={styles.sobrePerfil}>@Kleber_crvg70</Text>
          </View>
          <Text style={styles.comentPerfil}>Acordei cedo hoje para programar em um dia chuvoso, bom demais!</Text>

          <View style={styles.icon}>

          <TouchableOpacity>
            <Image 
            source={require('./src/img/comentario.png')}
            style={styles.iconComent}
            />

          </TouchableOpacity>

          <TouchableOpacity>
            <Image 
            style={styles.iconRT}
            source={require('./src/img/rt.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
            style={styles.iconLike}
            source={require('./src/img/like.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image 
            source={require('./src/img/compartilhado.png')}
            style={styles.iconCompartilhado}
            />
          </TouchableOpacity>

          </View>
        
          </View>

          <View style={styles.publiThree}>

          <View style={styles.fotoNome}>

              <Image 
              style={styles.publiPerfil}
              source={require('./src/img/foto-perfil.jpg')}
              />
              <Text style={styles.nomePerfil}>Kleber Lucas</Text>
              <Text style={styles.sobrePerfil}>@Kleber_crvg70</Text>
              </View>

              <Text style={styles.txtVista}>Olhem a foto que eu tirei, coisa linda demais!</Text>
              <Image
              source={require('./src/img/vistaBonita.jpg')}
              style={styles.vistaBonita}
              />

                      <View style={styles.icon}>

                      <TouchableOpacity>
                        <Image 
                        source={require('./src/img/comentario.png')}
                        style={styles.iconComent}
                        />

                      </TouchableOpacity>

                      <TouchableOpacity>
                        <Image 
                        style={styles.iconRT}
                        source={require('./src/img/rt.png')}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <Image
                        style={styles.iconLike}
                        source={require('./src/img/like.png')}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <Image 
                        source={require('./src/img/compartilhado.png')}
                        style={styles.iconCompartilhado}
                        />
                      </TouchableOpacity>

                      </View>
          </View>

          <View style={styles.publiFour}>

          <View style={styles.fotoNome}>

              <Image 
              style={styles.publiPerfil}
              source={require('./src/img/foto-perfil.jpg')}
              />
              <Text style={styles.nomePerfil}>Kleber Lucas</Text>
              <Text style={styles.sobrePerfil}>@Kleber_crvg70</Text>
              </View>

              <Text style={styles.txtPC}>Começando o dia da melhor forma.</Text>
              <Image 
              source={require('./src/img/vistaPC.jpg')}
              style={styles.vistaPC}
              />

              <View style={styles.icon}>

              <TouchableOpacity>
                <Image 
                source={require('./src/img/comentario.png')}
                style={styles.iconComent}
                />

              </TouchableOpacity>

              <TouchableOpacity>
                <Image 
                style={styles.iconRT}
                source={require('./src/img/rt.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                style={styles.iconLike}
                source={require('./src/img/like.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image 
                source={require('./src/img/compartilhado.png')}
                style={styles.iconCompartilhado}
                />
              </TouchableOpacity>

              </View>
          
          


          </View>
        </View>
      </ScrollView>

      <View style={styles.finalAPP}>
      
      <View style={styles.headerFinal}>

        <TouchableOpacity>
        <Image
        source={require('./src/img/homeIcon.png')}
        style={styles.homeIcon}
        />
        </TouchableOpacity>

        <TouchableOpacity>
        <Image
        source={require('./src/img/pesquisaIcon.png')}
        style={styles.pesquisaIcon}
        />
        </TouchableOpacity>

        <TouchableOpacity>
        <Image 
        source={require('./src/img/notificationsIcon.png')}
        style={styles.notificationsIcon}
        />
        </TouchableOpacity>

        <TouchableOpacity>
        <Image 
        source={require('./src/img/msg.png')}
        style={styles.msgIcon}
        />
        </TouchableOpacity>
      </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15202B'
  },
  header: {
    height: 60,
    width: 420,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    marginTop: 10,
    borderBottomWidth: 0.2,
    borderBottomColor: '#ccc'
  },
  logoTwitter: {
    width: 40,
    height: 35,
    marginTop: 5,
    lineHeight: 80

  },
  star: {
    tintColor: 'white',
    lineHeight: 80,
  },
  fotoPerfil: {
    height: 35,
    width: 35,
    borderRadius: 15,
  },
  publi: {
    flex: 1,
    marginTop: 10,
    paddingLeft: 10,
  },
  publiOne: {
    borderBottomWidth: 0.2,
    borderBottomColor: 'white',
  },
  publiPerfil: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  fotoNome: {
    flexDirection: 'row',
    flex: 1,
  },
  nomePerfil: {
    color: 'white',
    fontSize: 19,
    paddingLeft: 9,
    fontWeight: 'bold',
  },
  sobrePerfil: {
    color:  '#ccc',
    marginTop: 5,
    paddingLeft: 5,
    fontWeight: 'bold'
  },
  comentPerfil: {
    color: 'white',
    fontSize: 18,
    marginTop: -25,
    marginLeft: 70
  },
  icon: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 15
  },
  iconComent: {
    height: 20,
    width: 20,
    tintColor: 'white',
    marginLeft: 70
  },
  iconLike: {
    height: 20,
    width: 20,
    tintColor: 'white',
    marginLeft: 60
  },
  iconRT: {
    height: 20,
    width: 20,
    tintColor: 'white',
    marginLeft: 70
  },
  iconCompartilhado: {
    height: 20,
    width: 20,
    tintColor: 'white',
    marginLeft: 60
  },
  publiTwo: {
    marginTop: 10,
    borderBottomWidth: 0.2,
    borderBottomColor: 'white',
  },
  publiThree: {
    marginTop: 10,
    borderBottomWidth: 0.2,
    borderBottomColor: 'white',

  },
  txtVista: {
    marginLeft: 70,
    marginTop: -30,
    color: 'white',
    fontSize: 18
  },
  vistaBonita: {
    height: 400,
    marginLeft: 30,
    marginTop: 10,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  publiFour: {
    marginTop: 10,
    borderBottomWidth: 0.2,
    borderBottomColor: 'white',
  },
  txtPC: {
    marginLeft: 70,
    marginTop: -30,
    color: 'white',
    fontSize: 18
  },
  vistaPC: {
    height: 400,
    marginLeft: 30,
    marginTop: 10,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  headerFinal: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5,
    borderTopWidth: 0.2,
    borderTopColor: 'white'
  },
  homeIcon: {
    height: 25,
    width: 25,
    marginTop: 18,
    marginLeft: 10,
    tintColor: 'white',
  },
  pesquisaIcon: {
    height: 35,
    width: 35,
    marginTop: 15,
    marginLeft: 5,
    tintColor: 'white',
  },
  notificationsIcon: {
    height: 25,
    width: 25,
    marginTop: 20,
    marginLeft: 5,
    tintColor: 'white',
  },
  msgIcon: {
    height: 35,
    width: 35,
    marginTop: 14,
    marginLeft: 5,
    tintColor: 'white',
    marginRight: 10,
  }

});
