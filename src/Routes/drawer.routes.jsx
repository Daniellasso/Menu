import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import TabsRoutes from "./tab.routes";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{ title: " " }}>
      <Drawer.Screen
        name="home"
        component={TabsRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
          drawerLabel: "Inicio"
        }}
      />

      <Drawer.Screen
        name="user"
        component={TabsRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
          drawerLabel: "Perfil"
        }}
      />
    </Drawer.Navigator>
  );
}
