import React, { useRef } from 'react';
import HomeSection from '../organisms/HomeSection';
import ScrollProgressBar from '../atoms/scrollProgressBar';
import AnimatedSection from '../organisms/AnimatedSection';
import { useNavigate } from 'react-router-dom';

import HomeBg from '../../assets/images/Home bg.png';
import QuickBookingBg from '../../assets/images/Home bg 2.png';
import QuickBookingImg from '../../assets/images/quick booking img.png';
import DashboardBg from '../../assets/images/Dashboard bg.png';

const HomeTemplate: React.FC = () => {
    const sectionRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
    const navigate = useNavigate();
    
    return (
        <>
            <ScrollProgressBar />

            <AnimatedSection id="sec0">
                <div ref={sectionRefs[0]}>
                    <HomeSection
                        background={HomeBg}
                        title={`Welcome to Mitra Connect...`}
                        subtitle="Stuck in a tango with conflicting calendars? It's time for a smarter step. Our innovative solution cuts through the clutter, delivering the integrity of precise room availability"
                        clipPath="polygon(0 0, 35.5% 0, 62% 100%, 0 100%)"
                        buttonLabel="Dashboard"
                        btnColor='secondary'
                        onButtonClick={() => navigate('/dashboard')}
                        titleVariant='h2'
                        textBoxStyle={{
                            padding: 4,
                            borderRadius: 2,
                            maxWidth: '600px',
                            marginTop: '0px',
                        }}
                    >
                    </HomeSection>
                </div>
            </AnimatedSection>

            <AnimatedSection id="sec1">
                <div ref={sectionRefs[1]}>
                    <HomeSection
                        background={QuickBookingBg}
                        sideImage={QuickBookingImg}
                        sideImagePosition="left"
                        title="Quick Booking"
                        subtitle="Meeting in minutes? No time to spare? Our Quick Booking feature is your on-the-spot solution. Effortlessly claim your ideal spot in seconds, ensuring your next meeting kicks off without a hitch."
                        clipPath="polygon(35.5% 0, 100% 0, 100% 100%, 62% 100%)"
                        overlayColor='rgba(10,21,82,0.8)'
                        titleTextAlign='right'
                        subTitleTextAlign='right'
                        textBoxStyle={{
                            padding: 9,
                            borderRadius: 2,
                        }}
                    >
                    </HomeSection>
                </div>
            </AnimatedSection>

            <AnimatedSection id="sec2">
                <div ref={sectionRefs[2]}>
                    <HomeSection
                        background={DashboardBg}
                        title="Dashboard"
                        subtitle="Your Meeting Mission Control. From a real-time overview of every available room to instant bookings and a visual timeline of your day, this dashboard puts you in command. Dive into utilization stats and optimize every inch of your meeting space – because efficiency starts here."
                        buttonLabel="Go to Dashboard"
                        onButtonClick={() => navigate('/dashboard')}
                        clipPath="polygon(0 0, 35.5% 0, 62% 100%, 0 100%)"
                        titleVariant='h2'
                        titleTextAlign='left'
                        subTitleTextAlign='left'
                        btnColor='secondary'
                        textBoxStyle={{
                            padding: 4,
                            borderRadius: 2,
                            maxWidth: '600px',
                            marginLeft: 0,
                            marginRight: 'auto',
                            justifyContent: 'flex-start',
                        }}
                    />
                </div>
            </AnimatedSection>
        </>
    );
};

export default HomeTemplate;
