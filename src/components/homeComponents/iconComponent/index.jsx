import React from 'react';
import { Img, DivIcon, DivIconFlex, DivMain, ButtonCreatOrg} from './IconsElements';
import zeroConfig from '../../../assets/images/zero-configuration.svg';
import teamManagement from '../../../assets/images/team-management.svg';
import familiarFeatures from '../../../assets/images/familiar-features.svg';
import npmAudit from '../../../assets/images/npm-audit.svg';

export const IconComponent = () => {
    return (
    <DivMain>
        <DivIconFlex>
            <DivIcon>
                <div> 
                    <Img src={zeroConfig} />
                </div>
                <div> 
                    Zero configuration
                </div>
                Create an org add you team <br />
                and start collaboration. <br />
                Nothing to configure, set up or <br />
                manage.
            </DivIcon>
            <DivIcon>
                <div> 
                    <Img src={teamManagement} />
                </div>
                <div> 
                    Team management
                </div>
                Control who has access to <br />
                what modules within your <br />
                team namespoace using <br />
                straightforward team <br />
                management capacibitilies
            </DivIcon>
            <DivIcon>
                <div> 
                    <Img src={familiarFeatures} />
                </div>
                <div> 
                    Familiar features
                </div>
                npm Orgs has 100% party with <br />
                all the public npm registry <br />
                features your developers <br />
                already use.
            </DivIcon>
            <DivIcon>
                <div> 
                    <Img src={npmAudit} />
                </div>
                <div> 
                    npm audit
                </div>
                Enjoy the security auditing <br />
                features built into the npm <br />
                client, a zero-friction software <br />
                safer
            </DivIcon>
        </DivIconFlex>
        <ButtonCreatOrg> Creat an Org</ButtonCreatOrg>
    </DivMain>
    )
}
