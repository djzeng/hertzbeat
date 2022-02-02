import React from 'react'

import Translate, {translate} from '@docusaurus/Translate'


export const features = [{
    title: translate({
        message: '开箱即用'
    }),
    description: (
        <>
            <Translate values={{
                TANCLOUD: <strong>TANCLOUD</strong>,
                SAAS: <strong>SAAS</strong>,
                console: <a href={'https://www.console.tancloud.cn'}><strong>注册登陆</strong></a>,
                authorization: <strong>authorization</strong>,
                simple: <strong>simple</strong>,
                useful: <strong>useful</strong>,
                interface: <strong>扩展接口</strong>,
                sample: <strong>样例</strong>,
                doc: <strong>文档</strong>,
                br: <br/>
            }}>
                {'中小团队和个人无需再为了监控自己的网站资源，而去部署一套繁琐的监控系统。往往有时候，那套监控系统比自身网站消耗的资源还大。' +
                '{TANCLOUD} 提供{SAAS}云版本，{console}即可开始您的服务监控。{br}' +
                '安全是最重要的，我们对账户密钥和监控密钥全链路加密。'
                }
            </Translate>
        </>
    ),
}, {
    title: translate({
        message: '多支持与自定义'
    }),
    description: (
        <>
            <Translate values={{
                WebSockets: <strong>WebSockets</strong>,
                Servlet: <strong>Servlet</strong>,
                JaxRs: <strong>JAX-RS</strong>,
                native: <strong>Native</strong>,
                SpringBoot: <strong>Spring Boot</strong>,
                SpringWebFlux: <strong>Spring WebFlux</strong>,
                Javalin: <strong>Javalin</strong>,
                Quarkus: <strong>Quarkus</strong>,
                Ktor: <strong>Ktor</strong>,
                Micronaut: <strong>Micronaut</strong>,
                Solon: <strong>Solon</strong>,
                Jfinal: <strong>Jfinal</strong>,
                br: <br/>
            }}>
                {'TANCLOUD目前支持对网站，API，PING连通性，端口可用性，MYSQL数据库等的监控，不久我们将兼容 prometheus 协议，提供更多的监控类型和性能指标。{br}' +
                '我们提供了更自由化的阈值告警配置，支持邮箱，短信，webhook等告警通知，更多三方应用通知正在集成中。{br}' +
                '不同团队的监控需求千变万化，我们提供自定义监控，仅需配置YML就能快速接入监控系统。'
                }
            </Translate>
        </>
    ),
},
    {
        title: translate({
            message: '拥抱开源'
        }),
        description: (
            <>
                <Translate values={{
                    jwt: <strong>JWT</strong>,
                    basic: <strong>Basic Auth</strong>,
                    digest: <strong>Digest Auth</strong>,
                    dynamic: <strong>Dynamic</strong>,
                    perm: <strong>permissions</strong>,
                    dynamicCn: <strong>动态修改权限</strong>,
                    high: <strong>High performance</strong>,
                    highCn: <strong>高性能</strong>,
                    tree: <strong>Dictionary Matching Tree</strong>,
                    treeCn: <strong>改进的字典匹配树</strong>,
                    br: <br/>
                }}>
                    {'TANCLOUD监控系统代码开源，非常欢迎任何对此有兴趣的同学参与中来，我们一起进步，丰富的资源文档正在完善中。{br}' +
                    '我们相信开源改变世界！'
                    }
                </Translate>
            </>
        ),
    }]

export const friendLinks = [
    {
        img: 'ShenYu_logo.png',
        alt: 'ShenYu',
        url: 'https://dromara.org/projects/soul/overview/'
    }, {
        img: 'maxkey_logo.png',
        alt: 'MaxKey',
        url: 'https://maxkey.top/'
    }, {
        img: 'tlog_logo.png',
        alt: 'TLog',
        url: 'https://yomahub.com/tlog/'
    }, {
        img: 'hutool_logo.jpg',
        alt: 'Hutool',
        url: 'https://hutool.cn/'
    }, {
        img: 'satoken_logo.png',
        alt: 'Sa-Token',
        url: 'http://sa-token.dev33.cn/'
    }, {
        img: 'justauth_logo.png',
        alt: 'Justauth',
        url: 'https://justauth.wiki/'
    }, {
        img: 'pha_logo.jfif',
        alt: 'pha_api',
        url: 'https://www.phalapi.net/'
    }, {
        img: 'liteflow_logo.png',
        alt: 'LiteFlow',
        url: 'https://yomahub.com/liteflow/'
    }
]

export const mediaPartners = [
    {
        img: 'dromara_qr.png',
        alt: 'Dromara',
        url: 'https://mp.weixin.qq.com/s/Q3b7ZE802IMF6MwIPJIGQA'
    },
    {
        img: 'JavaHouDuan_logo.png',
        alt: 'JavaHouDuan',
        url: 'https://mp.weixin.qq.com/s/Ylq51a7Av8ZRuH811xZnDA'
    }
]


export const SetupExample = `
<dependency>
    <groupId>com.usthe.sureness</groupId>
    <artifactId>sureness-core</artifactId>
    <version>1.0.6</version>
</dependency>

compile group: 'com.usthe.sureness', name: 'sureness-core', version: '1.0.6'
`

export const SurenessIntegration = `
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain)
            throws IOException, ServletException {
        try {
            SubjectSum subject = SurenessSecurityManager.getInstance().checkIn(servletRequest);
        } catch (IncorrectCredentialsException | UnknownAccountException | ExpiredCredentialsException e1) {
            logger.debug("this request account info is illegal");
            responseWrite(ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED).body(e1.getMessage()), servletResponse);
            return;
        } catch (UnauthorizedException e4) {
            logger.debug("this account can not access this resource");
            responseWrite(ResponseEntity
                    .status(HttpStatus.FORBIDDEN).body(e4.getMessage()), servletResponse);
            return;
        } catch (RuntimeException e) {
            logger.error("other exception happen: ", e);
            responseWrite(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build(),
                    servletResponse);
            return;
        }
        filterChain.doFilter(servletRequest, servletResponse);
    }
`
