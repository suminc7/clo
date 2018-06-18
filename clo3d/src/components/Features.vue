<template>
    <div class="features">
        <div class="sub-header">
            <vueHeader></vueHeader>
            <div class="mobile-scroll"></div>
            <div class="sub-visual-txt-area">
                <h2 class="sub-visual-txt-title">{{ $t('features.FEATURES_TITLE') }}</h2>
                <p class="sub-visual-txt-spot">{{ $t('features.FEATURES_TXT_SPOT') }}</p>
            </div>
        </div>

        <div class="sub-area">
            <div ref="featureContainer">
                <div class="clearfix">
                    <div class="col-6 col-md-3">
                        <div class="features-box">
                            <div><img src="~static/images/features/img_features_01.png" alt="features thumbnail image" /></div>
                            <h3>3.0 MODULAR MODE</h3>
                            <div class="features-box_spot">
                                <h4 class="title-sub-style04-black">{{ $t('features.FEATURES_STITLE1') }}</h4>
                                <ul class="features-list contents-txt-style03-black">
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST1') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST2') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST3') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST4') }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-md-3">
                        <div class="features-box">
                            <div><img src="~static/images/features/img_features_02.png" alt="thumbnail image" /></div>
                            <h3>2.3 IMPROVEMENT OF SIMULATION SPEED</h3>
                            <div class="features-box_spot">
                                <h4 class="title-sub-style04-black">{{ $t('features.FEATURES_STITLE2') }}</h4>
                                <ul class="features-list contents-txt-style03-black">
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST5') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST6') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST7') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST8') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST9') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST10') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST11') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST12') }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-md-3">
                        <div class="features-box">
                            <div><img src="~static/images/features/img_features_03.png" alt="features thumbnail image" /></div>
                            <h3>3.0 3D LINE</h3>
                            <div class="features-box_spot">
                                <h4 class="title-sub-style04-black">{{ $t('features.FEATURES_STITLE3') }}</h4>
                                <ul class="features-list contents-txt-style03-black">
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST13') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST14') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST15') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST16') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST17') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST18') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST19') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST20') }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-md-3">
                        <div class="features-box">
                            <div><img src="~static/images/features/img_features_04.png" alt="thumbnail image" /></div>
                            <h3>3.0 SYMMETRIC ARRANGEMENT</h3>
                            <div class="features-box_spot">
                                <h4 class="title-sub-style04-black">{{ $t('features.FEATURES_STITLE4') }}</h4>
                                <ul class="features-list contents-txt-style03-black">
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST21') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST22') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST23') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST24') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST25') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST26') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST27') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST28') }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="clearfix">
                    <div class="col-6 col-md-3">
                        <div class="features-box">
                            <div><img src="~static/images/features/img_features_05.png" alt="thumbnail image" /></div>
                            <h3>2.5 SLASH INTERNAL LINES AND BASELINES</h3>
                            <div class="features-box_spot">
                                <h4 class="title-sub-style04-black">{{ $t('features.FEATURES_STITLE5') }}</h4>
                                <ul class="features-list contents-txt-style03-black">
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST29') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST30') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST31') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST32') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST33') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST34') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST35') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST36') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST37') }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-md-3">
                        <div class="features-box">
                            <div><img src="~static/images/features/img_features_06.png" alt="thumbnail image" /></div>
                            <h3>3.2 SHOW/HIDE GRADING IMPROVEMENTS</h3>
                            <div class="features-box_spot">
                                <h4 class="title-sub-style04-black">{{ $t('features.FEATURES_STITLE6') }}</h4>
                                <ul class="features-list contents-txt-style03-black">
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST38') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST39') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST40') }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-md-3">
                        <div class="features-box">
                            <div><img src="~static/images/features/img_features_07.png" alt="thumbnail image" /></div>
                            <h3>2.4 SYMMETRIC SEWING</h3>
                            <div class="features-box_spot">
                                <h4 class="title-sub-style04-black">{{ $t('features.FEATURES_STITLE7') }}</h4>
                                <ul class="features-list contents-txt-style03-black">
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST41') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST42') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST43') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST44') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST45') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST46') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST47') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST48') }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-md-3">
                        <div class="features-box">
                            <div><img src="~static/images/features/img_features_08.png" alt="thumbnail image" /></div>
                            <h3>2.4 CLO FABRIC KIT AND EMULATOR ARRANGEMENT</h3>
                            <div class="features-box_spot">
                                <h4 class="title-sub-style04-black">{{ $t('features.FEATURES_STITLE8') }}</h4>
                                <ul class="features-list contents-txt-style03-black">
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST49') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST50') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST51') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST52') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST53') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST54') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST55') }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="clearfix">
                    <div class="col-6 col-md-3">
                        <div class="features-box">
                            <div><img src="~static/images/features/img_features_09.png" alt="thumbnail image" /></div>
                            <h3>3.0 DEFAULT GARMENT TRIMS</h3>
                            <div class="features-box_spot">
                                <h4 class="title-sub-style04-black">{{ $t('features.FEATURES_STITLE9') }}</h4>
                                <ul class="features-list contents-txt-style03-black">
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST56') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST57') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST64') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST59') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST60') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST61') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST62') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST65') }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-md-3">
                        <div class="features-box">
                            <div><img src="~static/images/features/img_features_10.png" alt="thumbnail image" /></div>
                            <h3>2.4 STEAM</h3>
                            <div class="features-box_spot">
                                <h4 class="title-sub-style04-black">{{ $t('features.FEATURES_STITLE10') }}</h4>
                                <ul class="features-list contents-txt-style03-black">
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST58') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST63') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST66') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST67') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST68') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST69') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST70') }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-md-3">
                        <div class="features-box">
                            <div><img src="~static/images/features/img_features_11.png" alt="thumbnail image" /></div>
                            <h3>3.2 HUMAN IK</h3>
                            <div class="features-box_spot">
                                <h4 class="title-sub-style04-black">{{ $t('features.FEATURES_STITLE11') }}</h4>
                                <ul class="features-list contents-txt-style03-black">
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST71') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST72') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST73') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST74') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST75') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST76') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST77') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST78') }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-md-3">
                        <div class="features-box">
                            <div><img src="~static/images/features/img_features_12.png" alt="thumbnail image" /></div>
                            <h3>2.2 1:1 VIEW</h3>
                            <div class="features-box_spot">
                                <h4 class="title-sub-style04-black">{{ $t('features.FEATURES_STITLE12') }}</h4>
                                <ul class="features-list contents-txt-style03-black">
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST79') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST80') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST81') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST82') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST83') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST84') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST85') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST86') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST87') }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="clearfix">
                    <div class="col-6 col-md-3">
                        <div class="features-box">
                            <div><img src="~static/images/features/img_features_13.png" alt="thumbnail image" /></div>
                            <h3>2.2 COLORWAY</h3>
                            <div class="features-box_spot">
                                <h4 class="title-sub-style04-black">{{ $t('features.FEATURES_STITLE13') }}</h4>
                                <ul class="features-list contents-txt-style03-black">
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST88') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST89') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST90') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST91') }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-md-3">
                        <div class="features-box">
                            <div><img src="~static/images/features/img_features_14.png" alt="thumbnail image" /></div>
                            <h3>2.2 PRINT LAYOUT</h3>
                            <div class="features-box_spot">
                                <h4 class="title-sub-style04-black">{{ $t('features.FEATURES_STITLE14') }}</h4>
                                <ul class="features-list contents-txt-style03-black">
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST92') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST93') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST94') }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-md-3">
                        <div class="features-box">
                            <div><img src="~static/images/features/img_features_15.png" alt="thumbnail image" /></div>
                            <h3>2.4 NEW RENDER PRESETS</h3>
                            <div class="features-box_spot">
                                <h4 class="title-sub-style04-black">{{ $t('features.FEATURES_STITLE15') }}</h4>
                                <ul class="features-list contents-txt-style03-black">
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST95') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST96') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST97') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST98') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST99') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST100') }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-md-3">
                        <div class="features-box">
                            <div><img src="~static/images/features/img_features_16.png" alt="thumbnail image" /></div>
                            <h3>2.4 MCX FILE EXPORT</h3>
                            <div class="features-box_spot">
                                <h4 class="title-sub-style04-black">{{ $t('features.FEATURES_STITLE16') }}</h4>
                                <ul class="features-list contents-txt-style03-black">
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST101') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST102') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST103') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST104') }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="clearfix">
                    <div class="col-6 col-md-3">
                        <div class="features-box">
                            <div><img src="~static/images/features/img_features_17.png" alt="thumbnail image" /></div>
                            <h3>3.2 FILE SHARING</h3>
                            <div class="features-box_spot">
                                <h4 class="title-sub-style04-black">{{ $t('features.FEATURES_STITLE17') }}</h4>
                                <ul class="features-list contents-txt-style03-black">
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST105') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST106') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST107') }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-md-3">
                        <div class="features-box">
                            <div><img src="~static/images/features/img_features_18.png" alt="thumbnail image" /></div>
                            <h3>3.1 CUSTOM VIEW</h3>
                            <div class="features-box_spot">
                                <h4 class="title-sub-style04-black">{{ $t('features.FEATURES_STITLE18') }}</h4>
                                <ul class="features-list contents-txt-style03-black">
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST108') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST109') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST110') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST111') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST112') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST113') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST114') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST115') }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-md-3">
                        <div class="features-box">
                            <div><img src="~static/images/features/img_features_19.png" alt="thumbnail image" /></div>
                            <h3>2.3 TABLET COMPATIBILITY</h3>
                            <div class="features-box_spot">
                                <h4 class="title-sub-style04-black">{{ $t('features.FEATURES_STITLE19') }}</h4>
                                <ul class="features-list contents-txt-style03-black">
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST116') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST117') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST118') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST119') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST120') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST121') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST122') }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-md-3">
                        <div class="features-box">
                            <div><img src="~static/images/features/img_features_20.png" alt="thumbnail image" /></div>
                            <h3>3.1 AI IMPORT OF PATTERNS WITH PRINTS/GRAPHICS</h3>
                            <div class="features-box_spot">
                                <h4 class="title-sub-style04-black">{{ $t('features.FEATURES_STITLE20') }}</h4>
                                <ul class="features-list contents-txt-style03-black">
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST123') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST124') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST125') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST126') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST127') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST128') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST129') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST130') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST131') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST132') }}</a></li>
                                    <li><a href="" target="_blank"><span>ㆍ</span>{{ $t('features.FEATURES_TXT_LIST133') }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <vueFooterSimple></vueFooterSimple>
    </div>
</template>

<script>
    import zendeskUrlwithLocale from '../utils/getZendeskUrlwithLocale'

    export default {
        name: 'Features',
        data() {
            return {
                name: 'Features'
            }
        },
        methods: {
            setHrefAttr(liEl) {
                const aEl = liEl.getElementsByTagName('a')[0]
                const searchStr = liEl.innerText.replace('ㆍ', '')
                const encodedZendeskUrl = encodeURIComponent(`${zendeskUrlwithLocale}/search?query=${searchStr}`)
                const zendeskUrl = `/helpcenter?go_to=${encodedZendeskUrl}&return_to=${window.location.pathname}`

                aEl.setAttribute('href', zendeskUrl)
            }
        },
        mounted() {
            const liEls = this.$refs.featureContainer.getElementsByTagName('li')

            for (let i = 0; i < liEls.length; i++) {
                this.setHrefAttr(liEls[i])
            }
        }

    }
</script>

<style lang="scss">
    @import "../../sass/responsive";
    @import "../../sass/variables";

    .features {

        @media (max-width: 321px) {
            .col-6 {
                flex: 0 0 100%;
                max-width: 100%;
            }
        }

        .sub-header {
            height: 568px;
            background: url('~static/images/sub/bg_sub_features.jpg') no-repeat center;

            .features-tit-box {
                padding-top: 160px;
                text-align: center;
                clear: both;

                > h2 {
                    color: #fff;
                    font-size: 50px;
                    font-weight: 500;
                    letter-spacing: 15px;
                    line-height: 60px;
                }

                .features-txt-spot {
                    padding-top: 11px;
                    color: #fff;
                    font-size: 20px;
                    font-family: $font-lato;
                    line-height: 30px;
                    text-align: center;
                }
            }
        }

        .sub-area {
            overflow: hidden;
            padding: 50px 0 70px 0;
        }

        .features-box {
            margin-bottom: 40px;
            text-align: center;

            img {
                width: 100%;
                max-width: 100%;
                height: auto;
            }

            h3 {
                display: none;
                padding: 8px 0 8px;
                color: #232328;
                font-size: 10px;
                font-weight: 500;
                letter-spacing: 1px;
                text-transform: uppercase;
                line-height: 14px;
            }

            .features-box_spot {
                width: 100%;
                padding: 20px 0 0 20px;
                border-top: 1px solid #EDE9E7;
                text-align: left;

                ul.features-list {
                    padding-top: 9px;

                    li {
                        a {
                            display: inline-block;

                            span {
                                padding-right: 3px;
                                font-size: 15px;
                                color: #828791;
                            }
                            &:hover {
                                color: $color-blue;
                            }
                        }
                    }
                }
            }

            @include media-breakpoint-up(lg) {
                .features-box-img {
                    height: 162px;
                }
            }

            @include media-breakpoint-up(xl) {
                .features-box-img {
                    height: 250px;
                }
            }
        }
    }

    @include media-breakpoint-down(lg) {
        .features {
            .sub-header {
                .features-tit-box {
                    padding-top: 220px;

                    > h2 {
                        font-size: 40px;
                        line-height: 48px;
                    }

                    .features-txt-spot {
                        padding-top: 15px;
                        font-size: 17px;
                        line-height: 25px;
                    }
                }
            }

            .sub-area {
                padding: 40px 0 50px 0;
            }

            .features-box {
                .features-box_spot {
                    padding: 10px 0 0 10px;

                    ul.features-list {
                        padding-top: 6px;

                        li {
                            a {
                                span {
                                    font-size: 13px;
                                }

                            }
                        }
                    }
                }
            }
        }
    }

    @include media-breakpoint-down(sm) {
        .features {
            .sub-header {
                .features-tit-box {
                    padding-top: 230px;

                    > h2 {
                        font-size: 27px;
                        line-height: 32px;
                        letter-spacing: 7px;
                    }

                    .features-txt-spot {
                        padding-top: 14px;
                        font-size: 13px;
                        line-height: 20px;
                    }
                }
            }

            .sub-area {
                padding: 30px 0 40px 0;
            }

            .features-box {
                margin-bottom: 30px;
                min-height: 370px;

                .features-box_spot {
                    ul.features-list {
                        padding-top: 10px;
                    }
                }
            }
        }
    }

    .ko .features .features-box .features-box_spot h4 {
        font-weight: 400;
    }
</style>