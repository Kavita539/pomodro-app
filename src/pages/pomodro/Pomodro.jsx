import { useState } from "react";
import { Navbar, Timer, SettingsModal } from "../../components";

const Pomodro = () => {
    const [settingsModal, setSettingsModal] = useState(false);
    return(
        <>
            <Navbar />
            <div className="flex justify-center items-center mt-16">
				{settingsModal ? (
					<SettingsModal
						modalSetting={settingsModal}
						setModalSetting={setSettingsModal}
					/>
				) : (
					<Timer setModalSetting={setSettingsModal} />
				)}
			</div>
        </>
    );
};

export {Pomodro};