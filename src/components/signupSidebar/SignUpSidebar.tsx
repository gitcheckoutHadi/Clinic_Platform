import React from 'react'
import { DashStyle, FieldsStyle, SectionProgressStyle, SignUpSidebarContainer, SignUpSidebarStyle } from './SignUpSidebar.style'
import { useRecoilValue } from 'recoil';
import { MainColorSelector } from '../../recoil/ThemeSelectors';
import { SignUpSidebarData } from './SignUpSidebarData';
import { Typography } from '../../elements/textElement/fonts/Fonts';
import { useRegistration } from '../../contexts/RegistrationContext';

const SignUpSidebar = () => {
    const { secondaryColor } = useRecoilValue(MainColorSelector);
    const { completedFields } = useRegistration()
    return (
        <SignUpSidebarContainer style={{ backgroundColor: secondaryColor }}>
            <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                <Typography text={"Ektolife"} fontSize='3rem' fontWeight='700' color='#FFF' />
            </div>
            <SignUpSidebarStyle>
                {SignUpSidebarData.sections.map((section, index) => {
                    const totalFields = section.fields.length;
                    const completedCount = completedFields[section.sectionTitle]?.length || 0;
                    return (
                        <>
                            <Typography fontWeight="700" text={section.sectionTitle} fontSize="1.25rem" color="#FFF" />
                            <div style={{ display: 'flex', alignItems: 'center', columnGap: "0.62rem" }}>
                                {/* <SectionProgressStyle>
                                    {Array.from({ length: totalFields }).map((_, dashIndex) => (
                                        <DashStyle key={dashIndex} filled={(dashIndex < completedCount).toString()} />
                                    ))}
                                </SectionProgressStyle> */}
                                <FieldsStyle>
                                    {section.fields.map((field, fieldIndex) => (
                                        <Typography text={field} key={fieldIndex} fontSize="0.875rem" color="#FFF" />
                                    ))}
                                </FieldsStyle>
                            </div>
                        </>
                    );
                })}
            </SignUpSidebarStyle>
        </SignUpSidebarContainer >
    )
}

export default SignUpSidebar