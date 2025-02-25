// Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
// Licensed under the 【火山方舟】原型应用软件自用许可协议
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at 
//     https://www.volcengine.com/docs/82379/1433703
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { useCallback } from 'react';

import { IconCopy } from '@arco-design/web-react/icon';
import { Message } from '@arco-design/web-react';

const DebugInfo = ({ text }: { text: string }) => {
  const copyToClipboard = useCallback(async () => {
    await navigator.clipboard.writeText(text);
    Message.success('复制成功');
  }, [text]);

  return (
    <div className="text-gray text-xs mt-2 tracking-tight">
      <div className="py-1  text-gray-500 flex items-center gap-1">
        <IconCopy className={'cursor-pointer'} onClick={copyToClipboard} /> request id:&nbsp;{text}
      </div>
    </div>
  );
};

export default DebugInfo;
