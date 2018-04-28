
const dark = {
    darkest_shade: '#040404',
    dark_shade: '#171717',
    light_shade: '#bec2b7',
    font_color: '#f5cb5c',
    statusbar_color: '#171717'
}

const blue = {
    darkest_shade: '#05174c',
    dark_shade: '#061b58',
    light_shade: '#e8ebf4',
    font_color: '#fff',
    statusbar_color: '#0b101c',//'#04133f',
    font_color_light: '#474645',
    dashboard_background_color: '#d1d6e2'
}

const styles = {
    heading_font_size: 20,
    title_font_size: 18,
    text_input_size: 14
}

export const css = (theme = 'blue') => {
    switch (theme) {
        case 'dark': 
            return {
                container: {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: dark.darkest_shade,
                },
                containerLight: {
                    flex: 1,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'dark.dark_shade',
                },
                statusbarColor: dark.statusbar_color,
                smallContainerDark: {
                    flex: 3,
                    justifyContent: 'flex-end',
                    paddingBottom: 30,
                    alignItems: 'center',
                    backgroundColor: dark.darkest_shade,
                },
                smallContainerLight: {
                    flex: 1,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: dark.light_shade,
                },
                emailInputText: {
                    width: '70%',
                    fontSize: styles.title_font_size,
                },
                welcome: {
                    fontSize: 24,
                    fontWeight: '700',
                    color: '#f5cb5c',
                    textAlign: 'center',
                    margin: 10,
                },
                instructions: {
                    textAlign: 'center',
                    color: '#f5cb5c',
                    marginBottom: 5,
                },
                instructions1: {
                textAlign: 'center',
                color: '#000',
                marginBottom: 5,
                },
            }
        case 'blue': 
            return {
                container: {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: blue.darkest_shade,
                },
                containerLight: {
                    flex: 1,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: blue.light_shade,
                },
                normalContainerLight: {
                    flex: 1,
                    width: '100%',
                    paddingVertical: 20,
                    alignItems: 'center',
                    paddingHorizontal: 15,
                    backgroundColor: blue.light_shade,
                },
                dashboardContainer: {
                    flex: 1,
                    maxHeight: '15%',
                    width: '100%',
                    padding: 10,
                    marginVertical: 5,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    backgroundColor: blue.dashboard_background_color
                },
                dashboardCountTextStyle: {
                    fontWeight: '500',
                    fontSize: 32,
                    color: '#032263'
                },
                containerLightHorizontal: {
                    flex: 1,
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    backgroundColor: blue.light_shade,
                },
                statusbarColor: blue.statusbar_color,
                navHeaderColor: blue.darkest_shade,
                tabHeaderColor: '#032263',
                smallContainerDark: {
                    flex: 3,
                    justifyContent: 'flex-end',
                    paddingBottom: 30,
                    alignItems: 'center',
                    backgroundColor: blue.darkest_shade,
                },
                smallContainerLight: {
                    flex: 1,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: blue.light_shade,
                },
                emailInputText: {
                    width: '90%',
                    fontSize: styles.title_font_size,
                },
                welcome: {
                    fontSize: 28,
                    color: blue.font_color,
                    textAlign: 'center',
                    margin: 10,
                },
                instructions: {
                    textAlign: 'center',
                    color: blue.font_color,
                    marginBottom: 5,
                },
                notice: {
                    textAlign: 'center',
                    color: blue.dark_shade,
                    fontSize: 16
                },
                dashboardTitleStyle: {
                    textAlign: 'left',
                    color: blue.darkest_shade,
                    fontSize: 14,
                    fontWeight: '500'
                },
                dashboardSubTitleStyle: {
                    textAlign: 'center',
                    color: blue.darkest_shade,
                    fontSize: 14
                },
            }
        default:
            return {

            }
    }
}