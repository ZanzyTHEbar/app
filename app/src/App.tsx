import { appDataDir } from '@tauri-apps/api/path'
import { ParentComponent, Suspense, lazy, onMount } from 'solid-js'
import { useAppContextMain } from '@store/context/main'
import GlobalStyles from '@styles/globalstyles'

const ToastNotificationWindow = lazy(() => import('@components/Notifications'))

// TODO: Add Crop button in header
// TODO: Settings button in header
// TODO: Edit button to change the garden calendar name

const App: ParentComponent = (props) => {
    const { handleTitlebar, handleAppBoot } = useAppContextMain()
    //const ref = document.getElementById('titlebar')

    onMount(() => {
        handleTitlebar(true)
        handleAppBoot()
        //startAuth().then((res) => {
        //    console.log(res)
        //})

        appDataDir().then((res) => {
            console.log(res)
        })
    })

    return (
        <main class="w-screen h-screen">
            <GlobalStyles />
            <div class="App overflow-hidden items-center">
                <Suspense>
                    {props.children}
                    <ToastNotificationWindow />
                </Suspense>
            </div>
        </main>
    )
}

export default App
