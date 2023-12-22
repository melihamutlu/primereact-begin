export const NodeService = {
    getTreeNodesData() {
        return [
            {
                key: '1',
                label: 'Etkinlik Takvimi',
                data: 'Events Folder',
                icon: 'pi pi-fw pi-calendar',
                children: [
                    { key: '1-0', label: 'Sınavlar', icon: 'pi pi-fw pi-calendar-plus', data: 'Sınavlar' },
                    { key: '1-1', label: 'Resmi Tatiller', icon: 'pi pi-fw pi-calendar-plus', data: 'resmi tatiller' },
                    { key: '1-2', label: 'Çalışma günleri', icon: 'pi pi-fw pi-calendar-plus', data: 'çalışma günleri' }
                ]
            },
            {
                key: '0',
                label: 'Bilgisayar',
                data: 'Bilgisayar Klasörü',
                icon: 'pi pi-fw pi-inbox',
                children: [
                    {
                        key: '0-0',
                        label: 'İndirilenler',
                        data: 'İndirilenler Klasörü',
                        icon: 'pi pi-fw pi-download',
                        children: [
                            { key: '0-0-0', label: 'Meliha.Mutlu.pdf', icon: 'pi pi-fw pi-file', data: 'Meliha.Mutlu Klasörü' },
                            { key: '0-0-1', label: 'Haftalık.program.doc', icon: 'pi pi-fw pi-word', data: 'Haftalık.program Klasörü' }
                        ]
                    },
                    {
                        key: '0-1',
                        label: 'Ayarlar',
                        data: 'Ayarlar Klasörü',
                        icon: 'pi pi-fw pi-cog',
                        children: [{ key: '0-1-0', label: 'Sistem', icon: 'pi pi-fw pi-spinner', data: 'Sistem ayarları' }]
                    }
                ]
            },
            {
                key: '2',
                label: 'Yıldızlılar',
                data: 'Yıldızlılar Klasörü',
                icon: 'pi pi-fw pi-star-fill',
                children: [
                    {
                        key: '2-0',
                        icon: 'pi pi-fw pi-google',
                        label: 'Google',
                        data: 'google',
                        children: [
                            { key: '2-0-0', label: 'Slack', icon: 'pi pi-fw pi-slack', data: 'slack' },
                            { key: '2-0-1', label: 'Reddit', icon: 'pi pi-fw pi-reddit', data: 'reddit' }
                        ]
                    },
                    {
                        key: '2-1',
                        label: 'Sosyal medya',
                        icon: 'pi pi-fw pi-star-fill',
                        data: 'sosyal medya',
                        children: [
                            { key: '2-1-0', label: 'Linkedin', icon: 'pi pi-fw pi-linkedin', data: 'Goodfellas Movie' },
                            { key: '2-1-1', label: 'Instagram', icon: 'pi pi-fw pi-instagram', data: 'Untouchables Movie' }
                        ]
                    }
                ]
            }
        ];
    },

    getTreeNodes() {
        return Promise.resolve(this.getTreeNodesData());
    }
};
