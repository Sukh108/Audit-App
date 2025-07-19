import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import React, { useState } from 'react';
import { getStyles } from './styles';
import { useRoleContext } from '../../utils/roleContext';
import {WebView} from 'react-native-webview';

export default function Header() {
  const styles = getStyles();
  const { setRole } = useRoleContext();
  const [showPolicy, setShowPolicy] = useState(false);

  const handleLogout = async () => {
    setRole(null);
  };

  return (
    <View style={styles.headerRow}>
      <View style={styles.row}>
        <Text style={styles.logoIcon}>🗂️</Text>
        <Text style={styles.logoText}>AuditMaster</Text>
      </View>
      <View style={styles.row}><TouchableOpacity onPress={() => setShowPolicy(true)}>
        <Image
          source={require('../../assets/privacyPolicy.png')}
          style={styles.policyIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.logoText}>Logout</Text>
      </TouchableOpacity></View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showPolicy}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setShowPolicy(!showPolicy);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setShowPolicy(!showPolicy)}
            >
              <Text style={styles.textStyle}>X</Text>
            </TouchableOpacity>
            <WebView
             originWhitelist={['*']}
             contentMode='recommended'
             containerStyle={styles.webViewContainer}
              source={{
                html: '<p><strong>Privacy Policy for My Website</strong></p><p><br></p><p>My Website one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by My Website and how we use it.</p><p><br></p><p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p><p><br></p><p>This privacy policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in&My Website. This policy is not applicable to any information collected offline or via channels other than this website.</p><p>Consent</p><p><br></p><p>By using our website, you hereby consent to our Privacy Policy and agree to its terms. This Privacy Policy has been generated with the <a href="https://www.privacypolicygenerator.info/"><span class="s1">Privacy Policy Generator</span></a> which is available from <a href="https://www.privacypolicygenerator.info/"><span class="s1">https://www.privacypolicygenerator.info/</span></a><span class="Apple-converted-space">&</span></p><p><br></p><p><strong>Information we collect</strong></p><p><br></p><p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p><p><br></p><p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p><p><br></p><p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p><p><br></p><p><strong>Advertising Partners Privacy Policies</strong></p><p><br></p><p>You may consult this list to find the Privacy Policy for each of the advertising partners of&My Website.</p><p><br></p><p>If you have any questions about this Privacy Policy, please contact us.</p>  ',
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
