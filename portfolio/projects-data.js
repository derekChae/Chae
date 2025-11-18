// ============================================
// 📁 프로젝트 데이터 파일
// ============================================
// 
// 🔧 수정 방법:
// - 프로젝트 추가: projects 배열에 새 객체 추가
// - 플로우 추가: 해당 프로젝트의 flows 배열에 추가
// - 상태 변경: status를 'planned' → 'wip' → 'ready'로 변경
// - URL 연결: status가 'ready'일 때 url에 파일명 입력
//
// ============================================

const portfolioData = {
    
    // ========== 기본 정보 ==========
    profile: {
        name: "홍길동",  // 실명으로 수정하세요
        title: "정보보안 전문가",
        email: "coejrqud3@gmail.com",
        phone: "010-5558-1512",
        github: "https://github.com/your-username",
        experience: "6+",
        certifications: "AWS, ISMS"
    },

    // ========== 프로젝트 목록 ==========
    projects: [
        
        // ----- K사 (통신) -----
        {
            id: 'kt-telecom',
            company: 'K사 (통신)',
            title: '개인정보보호법 보안 검증',
            period: '2024.11 ~ 진행중',
            role: 'PL / 보안검증 담당',
            status: 'active',  // 'active' 또는 'completed'
            description: '통신사 개인정보 처리 시스템 전반에 대한 컴플라이언스 검증',
            
            flows: [
                {
                    id: 'auth',
                    number: '01',
                    title: '본인인증 플로우',
                    description: '본인확인서비스 개인정보 처리 검증',
                    status: 'ready',  // 'ready', 'wip', 'planned'
                    url: 'flows/kt-auth.html'  // 파일 경로
                },
                {
                    id: 'transfer',
                    number: '02',
                    title: '국외이전',
                    description: '개인정보 국외이전 적법성 검토',
                    status: 'wip',
                    url: ''
                },
                {
                    id: 'infra',
                    number: '03',
                    title: '인프라 진단',
                    description: '개인정보처리시스템 기술적 보호조치',
                    status: 'planned',
                    url: ''
                },
                {
                    id: 'retention',
                    number: '04',
                    title: '보유/파기',
                    description: '개인정보 보유기간 및 파기절차 검증',
                    status: 'planned',
                    url: ''
                }
            ]
        },

        // ----- LG전자 -----
        {
            id: 'lg-aws',
            company: 'LG전자',
            title: 'AWS 클라우드 인프라 보안',
            period: '2023.01 ~ 2024.08',
            role: 'Senior Consultant',
            status: 'completed',
            description: 'AWS 클라우드 환경 보안 아키텍처 설계 및 취약점 진단',
            
            flows: [
                {
                    id: 'iam',
                    number: '01',
                    title: 'IAM 권한관리',
                    description: 'AWS IAM 정책 및 권한 최소화 검토',
                    status: 'planned',
                    url: ''
                },
                {
                    id: 'network',
                    number: '02',
                    title: '네트워크 보안',
                    description: 'VPC, Security Group, NACL 설정 검증',
                    status: 'planned',
                    url: ''
                },
                {
                    id: 'logging',
                    number: '03',
                    title: '로깅/모니터링',
                    description: 'CloudTrail, CloudWatch 설정 점검',
                    status: 'planned',
                    url: ''
                },
                {
                    id: 'encryption',
                    number: '04',
                    title: '암호화',
                    description: 'KMS, S3 암호화 설정 검증',
                    status: 'planned',
                    url: ''
                }
            ]
        },

        // ----- 한국수력원자력 -----
        {
            id: 'khnp',
            company: '한국수력원자력',
            title: '보안성 검토',
            period: '2022.06 ~ 2022.08',
            role: 'Security Consultant',
            status: 'completed',
            description: '주요정보통신기반시설 취약점 분석 및 보안성 검토',
            
            flows: [
                {
                    id: 'vuln',
                    number: '01',
                    title: '취약점 진단',
                    description: '시스템/네트워크/웹 취약점 분석',
                    status: 'planned',
                    url: ''
                },
                {
                    id: 'pentest',
                    number: '02',
                    title: '모의해킹',
                    description: '침투 테스트 및 시나리오 기반 공격',
                    status: 'planned',
                    url: ''
                },
                {
                    id: 'compliance',
                    number: '03',
                    title: '컴플라이언스',
                    description: '주요정보통신기반시설 보호지침 준수',
                    status: 'planned',
                    url: ''
                }
            ]
        },

        // ----- KB손해보험 -----
        {
            id: 'finance',
            company: 'KB손해보험',
            title: '금융보안 컨설팅',
            period: '2021.03 ~ 2022.05',
            role: 'Security Consultant',
            status: 'completed',
            description: '전자금융감독규정 기반 보안성 심의 및 취약점 진단',
            
            flows: [
                {
                    id: 'isms',
                    number: '01',
                    title: 'ISMS-P',
                    description: '정보보호 및 개인정보보호 관리체계 인증',
                    status: 'planned',
                    url: ''
                },
                {
                    id: 'finance-compliance',
                    number: '02',
                    title: '전자금융감독규정',
                    description: '금융보안 컴플라이언스 점검',
                    status: 'planned',
                    url: ''
                }
            ]
        }

        // ----- 새 프로젝트 추가 시 여기에 복사해서 붙여넣기 -----
        // {
        //     id: 'new-project',
        //     company: '회사명',
        //     title: '프로젝트명',
        //     period: '2024.01 ~ 2024.12',
        //     role: '담당 역할',
        //     status: 'completed',
        //     description: '프로젝트 설명',
        //     flows: [
        //         {
        //             id: 'flow1',
        //             number: '01',
        //             title: '플로우명',
        //             description: '플로우 설명',
        //             status: 'planned',
        //             url: ''
        //         }
        //     ]
        // }
    ]
};
