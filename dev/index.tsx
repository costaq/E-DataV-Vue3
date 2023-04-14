import { createApp, defineComponent } from 'vue';

import { EDigitalFlop, EFullScreenContainer } from '../src';

const DevHome = defineComponent({
    
    setup() {
        return () => {
            return (
                <EFullScreenContainer>
                    <div>
                        <EDigitalFlop />
                    </div>
                </EFullScreenContainer>
            );
        };
    },
});


createApp(<DevHome />).mount('#app');
